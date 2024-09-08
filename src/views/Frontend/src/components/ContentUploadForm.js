// src/components/ContentUploadForm.js
import React, { useState } from 'react';

const ContentUploadForm = ({ onNext }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        const files = e.target.files;
        const allowedTypes = ['text/plain', 'video/mp4', 'image/jpeg', 'image/png']; // Add more types as needed
        const maxSize = 10 * 1024 * 1024; // 10MB

        for (const file of files) {
            if (!allowedTypes.includes(file.type)) {
                setError(`Invalid file type: ${file.type}`);
                return;
            }

            if (file.size > maxSize) {
                setError(`File too large: ${file.size} bytes`);
                return;
            }
        }

        setFiles(files);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description) {
            setError('Please fill in all fields');
            return;
        }

        // Call API to upload content
        fetch('/api/upload-content', {
            method: 'POST',
            body: new FormData(e.target),
        })
            .then((response) => response.json())
            .then((data) => {
                onNext();
            })
            .catch((error) => {
                setError(`Error uploading content: ${error.message}`);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Upload Your Content</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
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