import Expenses from "./components/Expenses";

function App() {
  const expense = [
    {
      title: "title1",
      amount: 2.67,
      date: new Date(2021, 4, 28),
    },
    {
      title: "title2",
      amount: 24.67,
      date: new Date(2021, 5, 29),
    },
    {
      title: "title3",
      amount: 29.67,
      date: new Date(2021, 6, 30),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expense={expense} ></Expenses>
    </div>
  );
}

export default App;
