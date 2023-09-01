import React, { createContext, useContext } from 'react';

// Step 1: Create a new React context
export const BoldContext = createContext();

// Step 2: Implement the provider component
export const BoldProvider = ({ children }) => {
  // Function to replace "**word**" with bolded version
  const boldifyText = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <BoldContext.Provider value={{ boldifyText }}>
      {children}
    </BoldContext.Provider>
  );
};

// Custom hook to access the boldifyText function
const useBoldContext = () => {
  const context = useContext(BoldContext);
  if (!context) {
    throw new Error('useBoldContext must be used within a BoldProvider');
  }
  return context;
};
