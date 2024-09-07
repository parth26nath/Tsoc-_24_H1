// src/components/Confirmation.js
import React from 'react';

const Confirmation = ({ contentDetails, tokenDetails, onConfirm }) => {
    return (
        <div>
            <h2>Confirm Content and Token Creation</h2>
            <h3>Content Details:</h3>
            <p>Title: {contentDetails.title}</p>
            <p>Description: {contentDetails.description}</p>
            <h3>Token Parameters:</h3>
            <p>NFT Name: {tokenDetails.nftName}</p>
            <p>NFT Symbol: {tokenDetails.nftSymbol}</p>
            <p>Total Supply of DRM Tokens: {tokenDetails.totalSupply}</p>
            <button onClick={onConfirm}>Create Content and Tokens</button>
        </div>
    );
};

export default Confirmation;
