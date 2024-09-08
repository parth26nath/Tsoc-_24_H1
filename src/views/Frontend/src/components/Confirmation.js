// src/components/Confirmation.js
import React from 'react';

const Confirmation = ({ contentDetails, tokenDetails, onConfirm }) => {
  if (!contentDetails || !tokenDetails) {
    return <div>Error: Missing required props</div>;
  }

  return (
    <div className="confirmation-container">
      <h2>Confirm Content and Token Creation</h2>
      <h3>Content Details:</h3>
      <p>Title: {contentDetails.title}</p>
      <p>Description: {contentDetails.description}</p>
      <h3>Token Parameters:</h3>
      <p>NFT Name: {tokenDetails.nftName}</p>
      <p>NFT Symbol: {tokenDetails.nftSymbol}</p>
      <p>Total Supply of DRM Tokens: {tokenDetails.totalSupply}</p>
      <button className="confirm-button" onClick={onConfirm}>
        Create Content and Tokens
      </button>
    </div>
  );
};

export default Confirmation;
