import React, { createContext, useContext, useState } from "react";

// Create the context
const TransactionHistoryContext = createContext();

// Provider component
export const TransactionHistoryProvider = ({ children }) => {
  const [transactionHistory, setTransactionHistory] = useState([
    { date: "10-10-2024", amount: "6000 ", pages: 25 },
    { date: "05-10-2024", amount: "36000 ", pages: 15 },
    { date: "01-10-2024", amount: "2400 ", pages: 10 },
  ]);

  // Add a new transaction
  const addTransaction = (date, amount, pages) => {
    const newTransaction = { date, amount, pages };
    setTransactionHistory((prev) => [...prev, newTransaction]);
  };

  return (
    <TransactionHistoryContext.Provider value={{ transactionHistory, addTransaction }}>
      {children}
    </TransactionHistoryContext.Provider>
  );
};

// Custom hook to use the context
export const useTransactionHistory = () => useContext(TransactionHistoryContext);
