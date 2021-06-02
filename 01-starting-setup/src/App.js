import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

function App() {
  const expense = [
    {
      id: 'e1',
      title: "title1",
      amount: 2.67,
      date: new Date(2021, 4, 28),
    },
    {
      id: 'e2',
      title: "title2",
      amount: 24.67,
      date: new Date(2021, 5, 29),
    },
    {
      id: 'e3',
      title: "title3",
      amount: 29.67,
      date: new Date(2021, 6, 30),
    },
  ];

  function addExpenseHandler(expense) {
    console.log('in App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expense} ></Expenses>
    </div>
  );
}

export default App;
