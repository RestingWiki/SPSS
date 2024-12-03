import React, { createContext, useContext, useState } from 'react';

// Create the Context
const FileTypeContext = createContext();

export const FileTypeProvider = ({ children }) => {
  const [fileTypes, setFileTypes] = useState([
    'pdf',
    'doc',
    'docx'
  ]);

  return (
    <FileTypeContext.Provider value={{ fileTypes, setFileTypes }}>
      {children} {/* Ensure children is properly rendered here */}
    </FileTypeContext.Provider>
  );
};

// Custom Hook to use the FileTypeContext
export const useFileTypes = () => useContext(FileTypeContext);
