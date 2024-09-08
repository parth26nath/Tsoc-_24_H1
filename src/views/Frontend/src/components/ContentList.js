// src/components/ContentList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ContentList = ({ contents }) => {
    if (!contents || contents.length === 0) {
        return <p>Loading...</p>; // or display an error message
    }

    return (
        <div>
            <h2>Your Created Content</h2>
            <ul>
                {contents.map(content => (
                    <li key={content.id}>
                        <Link to={`/content/${content.id}`}>{content.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContentList;