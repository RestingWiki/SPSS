import React, { createContext, useContext, useState } from 'react';

// Create the Context
const UploadedFileContext = createContext();

// Provider Component
export const UploadedFileProvider = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Add a new file to the uploadedFiles list
  const addUploadedFile = (file) => {
    setUploadedFiles((prevFiles) => [...prevFiles, file]);
  };

  // Remove a file from the uploadedFiles list
  const removeUploadedFile = (fileIndex) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, index) => index !== fileIndex));
  };

  // Clear all uploaded files
  const clearUploadedFiles = () => {
    setUploadedFiles([]);
  };

  return (
    <UploadedFileContext.Provider value={{ uploadedFiles, addUploadedFile, removeUploadedFile, clearUploadedFiles }}>
      {children}
    </UploadedFileContext.Provider>
  );
};

// Custom Hook to use the UploadedFileContext
export const useUploadedFiles = () => useContext(UploadedFileContext);
