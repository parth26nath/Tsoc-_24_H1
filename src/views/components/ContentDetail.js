// src/components/ContentDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ContentDetail = ({ contents }) => {
    const { id } = useParams();
    const content = contents.find(c => c.id === id);

    if (!content) {
        return <p>Content not found</p>;
    }

    return (
        <div>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            {/* Add logic to display content (text, video, photos) */}
        </div>
    );
};

export default ContentDetail;
