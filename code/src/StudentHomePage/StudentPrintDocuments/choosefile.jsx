import React, { useState } from 'react';
import { useUploadedFiles } from '../../context/UploadedFileContext'; // Import context
import './StudentPrintDocument.css';

const FileSelector = () => {
  const { uploadedFiles } = useUploadedFiles(); // Access uploaded files from context
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSelection = (event) => {
    const selectedIndex = event.target.value;
    if (selectedIndex !== '') {
      setSelectedFile(uploadedFiles[selectedIndex]);
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <div className="file-selector">
      <div className="dropdown-row">
        <select 
          id="file-select" 
          className="file-dropdown" 
          onChange={handleSelection} 
          value={selectedFile ? uploadedFiles.indexOf(selectedFile) : ''}
        >
          <option value="">-- Select a file --</option>
          {uploadedFiles.map((file, index) => (
            <option key={index} value={index}>
              {file.name}
            </option>
          ))}
        </select>
      </div>
      {selectedFile && (
        <div className="file-info-row mt-2">
          <strong>Selected File:</strong> {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
        </div>
      )}
    </div>
  );
};

export default FileSelector;
