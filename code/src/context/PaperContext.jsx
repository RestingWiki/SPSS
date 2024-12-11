import React, { createContext, useContext, useState } from "react";

// Create the context
const PaperContext = createContext();

// Provider component
export const PaperProvider = ({ children }) => {
  const [paperBalance, setPaperBalance] = useState(0);

  // Add paper to the balance
  const addPaper = (amount) => {
    if (amount > 0) {
      setPaperBalance((prev) => prev + amount);
    } else {
      console.error("Amount to add must be greater than 0.");
    }
  };

  // Use paper from the balance
  const usePaper = (amount) => {
    if (amount > 0) {
      setPaperBalance((prev) => prev - amount);
    } else {
      console.error("Amount to deduct must be greater than 0.");
    }
  };

  return (
    <PaperContext.Provider value={{ paperBalance, addPaper, usePaper }}>
      {children}
    </PaperContext.Provider>
  );
};

// Custom hook to use the context
export const usePaperContext = () => {
  const context = useContext(PaperContext);
  if (!context) {
    throw new Error("usePaperContext must be used within a PaperProvider");
  }
  return context;
};
