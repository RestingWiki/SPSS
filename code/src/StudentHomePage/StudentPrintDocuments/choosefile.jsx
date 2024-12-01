import React, { useState } from 'react';

const FileSelector = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file.name);
        }
    };

    return (
        <div className="file-selector">
            <label htmlFor="file-input" className="file-label">
                Choose File
            </label>
            <input 
                type="file" 
                id="file-input" 
                className="file-input" 
                onChange={handleFileChange} 
                style={{ display: 'none' }}
            />
            {selectedFile && <span className="file-name">{selectedFile}</span>}
        </div>
    );
};

export default FileSelector;
