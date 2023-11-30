import React, { createContext, useState } from 'react';

// Create a context with a default value (initial state)
const Contexts = createContext({
  budgetAmount: "",
  setBudgetAmount: () => {},
  expenseCategories: [],
  setExpenseCategories: () => {},
  averagePercentage: '',
  setAveragePercentage: () => {},
});

// Create a provider component that will wrap your app
const MyContextProvider = ({ children }) => {
  const [expenseCategories, setExpenseCategories] = useState([]);
  const [budgetAmount, setBudgetAmount] = useState('');
  const [averagePercentage, setAveragePercentage] = useState(null);

  const value = {
    expenseCategories,
    setExpenseCategories,
    budgetAmount,
    setBudgetAmount,
    averagePercentage,
    setAveragePercentage,
  }
  return (
    <Contexts.Provider value={value}>
      {children}
    </Contexts.Provider>
  );
};

export { Contexts, MyContextProvider };
