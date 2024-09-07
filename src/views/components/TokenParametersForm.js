// src/components/TokenParametersForm.js
import React, { useState } from 'react';

const TokenParametersForm = ({ onNext }) => {
    const [nftName, setNftName] = useState('');
    const [nftSymbol, setNftSymbol] = useState('');
    const [totalSupply, setTotalSupply] = useState('');
    const [additionalFeatures, setAdditionalFeatures] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call API to define token parameters
        // On success:
        onNext();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Define Token Parameters</h2>
            <label>NFT Name:</label>
            <input type="text" value={nftName} onChange={(e) => setNftName(e.target.value)} placeholder="NFT Name" required />
            <label>NFT Symbol:</label>
            <input type="text" value={nftSymbol} onChange={(e) => setNftSymbol(e.target.value)} placeholder="NFT Symbol" required />
            <label>Total Supply of DRM Tokens:</label>
            <input type="number" value={totalSupply} onChange={(e) => setTotalSupply(e.target.value)} placeholder="Total Supply of DRM Tokens" required />
            <label>Additional Features (Optional):</label>
            <input type="text" value={additionalFeatures} onChange={(e) => setAdditionalFeatures(e.target.value)} placeholder="Additional Features (Optional)" />
            <button type="submit">Next</button>
        </form>
    );
};

export default TokenParametersForm;
