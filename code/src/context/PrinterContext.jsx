import React, { createContext, useContext, useState, useMemo } from 'react';

// Create context
const PrinterContext = createContext();

// Provider component
export const PrinterProvider = ({ children }) => {
  const [connectedPrinters, setConnectedPrinters] = useState([
    { id: 6, model: "Lexmark MS431DN", location: "B10", status: "enabled" },
    { id: 7, model: "Epson EcoTank L3110", location: "C4", status: "enabled" },
    { id: 8, model: "Brother MFC-L2750DW", location: "C4", status: "disabled" },
  ]);

  // Memoize the sorted printers array to avoid unnecessary re-sorting
  const sortedPrinters = useMemo(() => {
    return [...connectedPrinters].sort((a, b) => a.id - b.id);
  }, [connectedPrinters]);

  return (
    <PrinterContext.Provider value={{ connectedPrinters: sortedPrinters, setConnectedPrinters }}>
      {children}
    </PrinterContext.Provider>
  );
};

// Custom hook for using the context
export const useConnectedPrinters = () => useContext(PrinterContext);
