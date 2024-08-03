import React, { userState } from 'eact';
import axios from 'axios'

const Artist = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [image_url, setImageUrl] = useState('');
    const [price, setPrice] = useState(0);
    const [genre, setGenre] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const artwork = { title, description, image_url, price, genre };
        try {
            const response = await axios.post('/artist/artwork', artwork);
            console.log(response.data;
                        )
        } catch (error) {

        }
    };

    return (
        <div>
            <h1>Create Artwork</h1>
            <form onSubmit={handleSubmit}>
                 <label>
                    Title:
                    <input type="text" value={title} onchange={(e)}  => setTitle(e.target.value)} />
                    </label>
                    <br />
                    <label>
                         Description:
                         
    )
}
