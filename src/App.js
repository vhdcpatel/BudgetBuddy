import './App.css'
import DisplayExpense from './components/DisplayExpense';




function App() {
  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Stock Loss1",
  //     amount: 2060,
  //     date: new Date(2023, 4, 13),
  //   },
  //   {
  //     id: "e1",
  //     title: "Stock Loss2",
  //     amount: 1900,
  //     date: new Date(2023, 4, 7),
  //   },
  //   {
  //     id: "e1",
  //     title: "Stock Loss3",
  //     amount: 700,
  //     date: new Date(2023, 4, 8),
  //   },
  //   {
  //     id: "e1",
  //     title: "Stock Loss4",
  //     amount: 560,
  //     date: new Date(2023, 3, 10),
  //   },
  // ];

    const expenses = [
      {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
      },
      {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
      },
    ];


  return (
    <div>
      <DisplayExpense list={expenses}></DisplayExpense>
    </div>
  );
}

export default App;
