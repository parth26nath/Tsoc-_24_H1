// src/pages/Dashboard.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentList from '../components/ContentList';

const Dashboard = () => {
    const [contents, setContents] = useState([]);

    // Fetch content from backend
    // useEffect(() => {
    //     fetchContents().then(setContents);
    // }, []);

    return (
        <div>
            <Header />
            <main>
                <h1>Dashboard</h1>
                <ContentList contents={contents} />
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;
