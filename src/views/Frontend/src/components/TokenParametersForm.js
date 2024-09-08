// src/components/TokenParametersForm.js
import React, { useState } from 'react';

const TokenParametersForm = ({ onNext }) => {
    const [nftName, setNftName] = useState('');
    const [nftSymbol, setNftSymbol] = useState('');
    const [totalSupply, setTotalSupply] = useState('');
    const [additionalFeatures, setAdditionalFeatures] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nftName || !nftSymbol || !totalSupply) {
            setError('Please fill in all required fields');
            return;
        }

        if (isNaN(totalSupply) || parseInt(totalSupply) <= 0) {
            setError('Total supply must be a positive number');
            return;
        }

        setLoading(true);

        // Call API to define token parameters
        fetch('/api/token-parameters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nftName, nftSymbol, totalSupply, additionalFeatures }),
        })
            .then((response) => response.json())
            .then((data) => {
                onNext();
            })
            .catch((error) => {
                setError(`Error defining token parameters: ${error.message}`);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Define Token Parameters</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <label>NFT Name:</label>
            <input type="text" value={nftName} onChange={(e) => setNftName(e.target.value)} placeholder="NFT Name" required />
            <label>NFT Symbol:</label>
            <input type="text" value={nftSymbol} onChange={(e) => setNftSymbol(e.target.value)} placeholder="NFT Symbol" required />
            <label>Total Supply of DRM Tokens:</label>
            <input type="number" value={totalSupply} onChange={(e) => setTotalSupply(e.target.value)} placeholder="Total Supply of DRM Tokens" required />
            <label>Additional Features (Optional):</label>
            <input type="text" value={additionalFeatures} onChange={(e) => setAdditionalFeatures(e.target.value)} placeholder="Additional Features (Optional)" />
            <button type="submit" disabled={loading}>
                {loading ? 'Defining...' : 'Next'}
            </button>
        </form>
    );
};

export default TokenParametersForm;