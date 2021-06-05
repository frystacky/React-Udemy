import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: "Sushi",
    amount: 2.67,
    date: new Date(2021, 4, 28),
  },
  {
    id: 'e2',
    title: "Candy",
    amount: 24.67,
    date: new Date(2020, 5, 29),
  },
  {
    id: 'e3',
    title: "Soda",
    amount: 29.67,
    date: new Date(2021, 6, 30),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} ></Expenses>
    </div>
  );
};

export default App;
