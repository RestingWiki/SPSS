import React, { createContext, useContext, useState } from "react";

// Create the Context
const UploadedFileContext = createContext();

// Provider Component
export const UploadedFileProvider = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Helper function to generate a random constant number between 23 and 45
  const getRandomPageCount = () => Math.floor(Math.random() * (45 - 23 + 1)) + 23;

  // Add a new file to the uploadedFiles list and assign a random page count
  const addUploadedFile = (file) => {
    const randomPageCount = getRandomPageCount();

    const newFile = {
      name: file.name,
      size: file.size,
      type: file.type,
      pageCount: randomPageCount, // Assign random page count
    };

    setUploadedFiles((prevFiles) => [...prevFiles, newFile]);
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
    <UploadedFileContext.Provider
      value={{ uploadedFiles, addUploadedFile, removeUploadedFile, clearUploadedFiles }}
    >
      {children}
    </UploadedFileContext.Provider>
  );
};

// Custom Hook to use the UploadedFileContext
export const useUploadedFiles = () => useContext(UploadedFileContext);
