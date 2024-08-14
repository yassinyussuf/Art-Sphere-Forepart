import React, { useState } from 'react';
import axios from 'axios';
import './PaymentForm.css'; // Import the CSS file

const PaymentForm = ({ orderId, userId }) => {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [message, setMessage] = useState('');
    const [fetching, setFetching] = useState(false);

    const handlePaymentSubmit = async (event) => {
        event.preventDefault();
        setFetching(true);
        try {
            const response = await axios.post('http://localhost:4050/payments/make-payments', {
                amount,
                currency,
                payment_method: paymentMethod,
                order_id: orderId,
                user_id: userId
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setMessage(response.data.message);
            // Clear form fields after successful submission
            setAmount('');
            setCurrency('');
            setPaymentMethod('');
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'An error occurred.');
        } finally {
            setFetching(false);
        }
    };

    return (
        <div className="payment-form-container">
            <h2>Make a Payment</h2>
            <form onSubmit={handlePaymentSubmit}>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                    required
                />
                <input
                    type="text"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    placeholder="Currency"
                    required
                />
                <input
                    type="text"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    placeholder="Payment Method"
                    required
                />
                <button type="submit" disabled={fetching}>
                    {fetching ? 'Processing...' : 'Submit Payment'}
                </button>
            </form>
            {message && <p className={message.includes('successfully') ? 'success-message' : 'error-message'}>{message}</p>}
        </div>
    );
};

export default PaymentForm;
