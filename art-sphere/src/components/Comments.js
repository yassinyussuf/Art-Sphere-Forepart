import React, { Component } from 'react';
import axios from 'axios';
import './Comments.css'; // Import the CSS file

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            comments: [],
            message: '',
            fetching: false
        };
    }

    // Fetch comments for the artwork
    fetchComments = async () => {
        this.setState({ fetching: true });
        try {
            const response = await axios.get(`http://localhost:4050/api/comments/${this.props.artworkId}`);
            this.setState({ comments: response.data.comments, message: '' });
        } catch (error) {
            this.setState({ message: 'Error fetching comments.' });
        } finally {
            this.setState({ fetching: false });
        }
    };

    // Fetch comments when artworkId changes
    componentDidUpdate(prevProps) {
        if (prevProps.artworkId !== this.props.artworkId) {
            this.fetchComments();
        }
    }

    // Handle adding a comment
    handleAddComment = async () => {
        const { content } = this.state;
        const { artworkId } = this.props;
        this.setState({ fetching: true });
        try {
            const response = await axios.post('http://localhost:4050/api/comments', {
                artwork_id: artworkId,
                content: content
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            this.setState({ message: response.data.message, content: '' });
            this.fetchComments(); // Refresh comments
        } catch (error) {
            this.setState({ message: error.response ? error.response.data.message : 'An error occurred.' });
        } finally {
            this.setState({ fetching: false });
        }
    };

    render() {
        const { content, comments, message, fetching } = this.state;
        return (
            <div className="comments-container">
                <h2>Comments</h2>
                <textarea
                    value={content}
                    onChange={(e) => this.setState({ content: e.target.value })}
                    placeholder="Add a comment..."
                />
                <button onClick={this.handleAddComment} disabled={fetching}>
                    {fetching ? 'Adding...' : 'Add Comment'}
                </button>
                {message && <p className={message.includes('successfully') ? 'success-message' : 'error-message'}>{message}</p>}
                <div className="comments-list">
                    {comments.map(comment => (
                        <div key={comment.id} className="comment">
                            <p>User ID: {comment.user_id}</p>
                            <p>{comment.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Comments;
