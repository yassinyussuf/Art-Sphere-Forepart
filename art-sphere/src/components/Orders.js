import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './Orders.css'; // Import the CSS file

const Orders = ({ userId }) => {
    const [orders, setOrders] = useState([]);
    const [artworkId, setArtworkId] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [fetching, setFetching] = useState(false);

    // Define fetchOrders using useCallback to memoize the function
    const fetchOrders = useCallback(async () => {
        setFetching(true);
        try {
            const response = await axios.get(`http://localhost:4050/api/orders/${userId}`);
            setOrders(response.data.orders);
        } catch (error) {
            setMessage('Error fetching orders.');
        } finally {
            setFetching(false);
        }
    }, [userId]); // Dependency array includes userId

    // Fetch orders when userId changes
    useEffect(() => {
        if (userId) {
            fetchOrders();
        }
    }, [userId, fetchOrders]); // Include fetchOrders in the dependency array

    const handleCreateOrder = async () => {
        setFetching(true);
        try {
            const response = await axios.post('http://localhost:4050/api/orders/get/orders', {
                artwork_id: artworkId,
                user_id: userId,
                amount: amount
            });
            setMessage(response.data.message);
            setArtworkId('');
            setAmount('');
            fetchOrders(); // Refresh orders
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'An error occurred.');
        } finally {
            setFetching(false);
        }
    };

    return (
        <div className="orders-container">
            <h2>Orders</h2>
            <div className="order-form">
                <h3>Create Order</h3>
                <input
                    type="text"
                    value={artworkId}
                    onChange={(e) => setArtworkId(e.target.value)}
                    placeholder="Artwork ID"
                />
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                />
                <button onClick={handleCreateOrder} disabled={fetching}>
                    {fetching ? 'Creating...' : 'Create Order'}
                </button>
            </div>
            {message && <p className={message.includes('successfully') ? 'success-message' : 'error-message'}>{message}</p>}
            <div className="orders-list">
                <h3>Your Orders</h3>
                {orders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    <ul>
                        {orders.map(order => (
                            <li key={order.id}>
                                <h4>{order.artwork_title}</h4>
                                <p>Amount: {order.amount}</p>
                                <p>Status: {order.status}</p>
                                {order.certificate_code && <p>Certificate Code: {order.certificate_code}</p>}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Orders;
