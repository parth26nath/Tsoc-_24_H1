// ContentCreation.js
import React, { useState } from 'react';

function ContentCreation() {
  const [step, setStep] = useState(1);
  const [contentDetails, setContentDetails] = useState({
    title: '',
    description: '',
    file: null,
  });
  const [tokenDetails, setTokenDetails] = useState({
    nftName: '',
    nftSymbol: '',
    totalSupply: 0,
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const handleContentChange = (event) => {
    setContentDetails({ ...contentDetails, [event.target.name]: event.target.value });
  };

  const handleTokenChange = (event) => {
    setTokenDetails({ ...tokenDetails, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event) => {
    setContentDetails({ ...contentDetails, file: event.target.files[0] });
  };

  const onConfirm = () => {
    // Add logic to create content and tokens here
    console.log('Content Details:', contentDetails);
    console.log('Token Details:', tokenDetails);
    nextStep();
  };

  return (
    <div id="root">
      <header>
        <nav className="navcontainer">
          <div className="logo">Logo</div>
          <ul>
            <li><a href="#" className="btn btn-secondary">Home</a></li>
            <li><a href="#" className="btn btn-secondary">Dashboard</a></li>
            <li><a href="#" className="btn btn-secondary">Profile</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {step === 1 && (
          <div>
            <h2>Upload Content</h2>
            <form>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" value={contentDetails.title} onChange={handleContentChange} /><br /><br />
              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" value={contentDetails.description} onChange={handleContentChange} /><br /><br />
              <label htmlFor="file">File:</label>
              <input type="file" id="file" name="file" onChange={handleFileChange} /><br /><br />
              <button type="button" onClick={nextStep}>Next</button>
            </form>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>Set Token Parameters</h2>
            <form>
              <label htmlFor="nftName">NFT Name:</label>
              <input type="text" id="nftName" name="nftName" value={tokenDetails.nftName} onChange={handleTokenChange} /><br /><br />
              <label htmlFor="nftSymbol">NFT Symbol:</label>
              <input type="text" id="nftSymbol" name="nftSymbol" value={tokenDetails.nftSymbol} onChange={handleTokenChange} /><br /><br />
              <label htmlFor="totalSupply">Total Supply:</label>
              <input type="number" id="totalSupply" name="totalSupply" value={tokenDetails.totalSupply} onChange={handleTokenChange} /><br /><br />
              <button type="button" onClick={nextStep}>Next</button>
              <button type="button" onClick={previousStep}>Back</button>
            </form>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>Confirm Details</h2>
            <p>Content Title: <span id="content-title">{contentDetails.title}</span></p>
            <p>Content Description: <span id="content-description">{contentDetails.description}</span></p>
            <p>NFT Name: <span id="nft-name">{tokenDetails.nftName}</span></p>
            <p>NFT Symbol: <span id="nft-symbol">{tokenDetails.nftSymbol}</span></p>
            <p>Total Supply: <span id="total-supply">{tokenDetails.totalSupply}</span></p>
            <button type="button" onClick={onConfirm}>Confirm</button>
            <button type="button" onClick={previousStep}>Back</button>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2>Success!</h2>
            <p>Content and Tokens created successfully!</p>
          </div>
        )}
        </main>
        </div>