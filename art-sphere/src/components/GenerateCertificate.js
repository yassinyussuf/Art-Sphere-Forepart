import React, { useState } from 'react';
import axios from 'axios';
import './GenerateCertificate.css'; // Import the CSS file

const GenerateCertificate = () => {
    const [orderId, setOrderId] = useState('');
    const [certificateCode, setCertificateCode] = useState('');
    const [message, setMessage] = useState('');
    const [fetching, setFetching] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    // Function to handle certificate generation
    const handleGenerateCertificate = async () => {
        setFetching(true); // Start loading state
        setIsGenerating(true);
        try {
            const response = await axios.post(`http://localhost:4050/api/certificate/generate-certificate/${orderId}`);
            setCertificateCode(response.data.certificate_code);
            setMessage('Certificate generated successfully!');
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            } else {
                setMessage('An error occurred. Please try again.');
            }
        } finally {
            setFetching(false); // End loading state
            setIsGenerating(false);
        }
    };

    // Function to handle fetching existing certificate
    const handleFetchCertificate = async () => {
        setFetching(true); // Start loading state
        setIsGenerating(false);
        try {
            const response = await axios.get(`http://localhost:4050/api/certificate/get-certificate/${orderId}`);
            if (response.data.certificate_code) {
                setCertificateCode(response.data.certificate_code);
                setMessage('Certificate fetched successfully!');
            } else {
                setMessage('No certificate found for this order.');
            }
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            } else {
                setMessage('An error occurred. Please try again.');
            }
        } finally {
            setFetching(false); // End loading state
        }
    };

    return (
        <div className="generate-certificate-container">
            <h2>Generate or Retrieve Certificate</h2>
            <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter Order ID"
            />
            <button onClick={handleGenerateCertificate} disabled={fetching || isGenerating}>
                {fetching && isGenerating ? 'Generating...' : 'Generate Certificate'}
            </button>
            <button onClick={handleFetchCertificate} disabled={fetching || isGenerating}>
                {fetching && !isGenerating ? 'Fetching...' : 'Retrieve Certificate'}
            </button>
            {message && <p className={message.includes('successfully') ? 'success-message' : 'error-message'}>{message}</p>}
            {certificateCode && (
                <div className="certificate-code">
                    <h3>Certificate Code:</h3>
                    <p>{certificateCode}</p>
                </div>
            )}
        </div>
    );
};

export default GenerateCertificate;
