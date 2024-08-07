// src/components/ContentUploadForm.js
import React, { useState } from 'react';

const ContentUploadForm = ({ onNext }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call API to upload content
        // On success:
        onNext();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Upload Your Content</h2>
            <label>Content Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Content Title" required />
            <label>Description:</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Content Description" required />
            <label>Upload your text, video, or photo:</label>
            <input type="file" multiple onChange={handleFileChange} required />
            <button type="submit">Next</button>
        </form>
    );
};

export default ContentUploadForm;
