// src/pages/ContentCreation.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ContentCreation.css';
import ContentUploadForm from '../components/ContentUploadForm';
import TokenParametersForm from '../components/TokenParametersForm';
import Confirmation from '../components/Confirmation';

const ContentCreation = () => {
    const [step, setStep] = useState(1);
    const [contentDetails, setContentDetails] = useState({});
    const [tokenDetails, setTokenDetails] = useState({});

    const nextStep = () => setStep(step + 1);
    const previousStep = () => setStep(step - 1);

    return (
        <div>
            <Header />
            <main>
                {step === 1 && <ContentUploadForm onNext={() => {
                    setContentDetails({ title: "Sample Title", description: "Sample Description" });
                    nextStep();
                }} />}
                {step === 2 && <TokenParametersForm onNext={() => {
                    setTokenDetails({ nftName: "Sample NFT", nftSymbol: "SNFT", totalSupply: 100 });
                    nextStep();
                }} />}
                {step === 3 && <Confirmation contentDetails={contentDetails} tokenDetails={tokenDetails} onConfirm={() => {
                    // Call API to create content and tokens
                    nextStep();
                }} />}
                {step === 4 && <p>Content and Tokens created successfully!</p>}
                {step > 1 && step < 4 && <button onClick={previousStep}>Back</button>}
            </main>
            <Footer />
        </div>
    );
};

export default ContentCreation;
