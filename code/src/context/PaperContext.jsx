import React, { createContext, useContext, useState } from "react";

// Create the context
const PaperContext = createContext();

// Provider component
export const PaperProvider = ({ children }) => {
  const [paperBalance, setPaperBalance] = useState(0);

  // Add paper to the balance
  const addPaper = (amount) => {
    setPaperBalance((prev) => prev + amount);
  };

  // Use paper from the balance
  const usePaper = (amount) => {
    setPaperBalance((prev) => Math.max(0, prev - amount));
  };

  return (
    <PaperContext.Provider value={{ paperBalance, addPaper, usePaper }}>
      {children}
    </PaperContext.Provider>
  );
};

// Custom hook to use the context
export const usePaperContext = () => useContext(PaperContext);
