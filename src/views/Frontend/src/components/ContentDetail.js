// src/components/ContentDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ContentDetail = ({ contents }) => {
    const { id } = useParams();
    const content = contents.find(c => c.id === id);

    if (!content) {
        return <p>Content not found</p>;
    }

    let contentDisplay;
    switch (content.type) {
        case 'text':
            contentDisplay = <p>{content.text}</p>;
            break;
        case 'video':
            contentDisplay = (
                <video width="100%" controls>
                    <source src={content.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            );
            break;
        case 'photos':
            contentDisplay = (
                <div>
                    {content.photos.map((photo, index) => (
                        <img key={index} src={photo.url} alt={photo.alt} />
                    ))}
                </div>
            );
            break;
        default:
            contentDisplay = <p>Unknown content type</p>;
    }

    return (
        <div>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            {contentDisplay}
        </div>
    );
};

export default ContentDetail;
