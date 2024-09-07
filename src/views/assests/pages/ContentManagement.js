// src/pages/ContentManagement.js
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContentDetail from '../../components/ContentDetail';
import './ContentManagement.css';

const ContentManagement = ({ contents }) => {
    return (
        <div>
            <Header />
            <main>
                <h1>Content Management</h1>
                <ContentDetail contents={contents} />
            </main>
            <Footer />
        </div>
    );
};

export default ContentManagement;
