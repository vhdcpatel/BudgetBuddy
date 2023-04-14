import './App.css'
import DisplayExpense from './components/Expense/DisplayExpense';
import ExpenseItems from './components/Expense/ExpenseItems';

const  App = () => {
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
        title: "made with love  by vhdc ",
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
      <h2>Let's get started</h2>
      <DisplayExpense listItems={expenses}> </DisplayExpense>
      {/* <div>
        <ExpenseItems
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItems>
        <ExpenseItems
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItems>
        <ExpenseItems
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItems>
        <ExpenseItems
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItems>
      </div> */}
    </div>
  );
}

export default App;
