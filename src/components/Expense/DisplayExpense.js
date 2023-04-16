import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./FilterExpense";
import "./DisplayExpense.css";
import Card from "../UI/Card";
import { useState } from "react";

function DisplayExpense(props) {

  const [filterYear,setFilterYear] = useState('2020')

  const filterChangeHandler = (selectedYear) =>{
    console.log(selectedYear);
    setFilterYear((filterYear) => (filterYear = selectedYear));
  }
  console.log(filterYear);

  return (
    <Card className="expenses">
      <ExpenseFilter onSelect={filterChangeHandler}></ExpenseFilter>
      {props.listItems.map((expense) => (
        <ExpenseItems
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      {/* {} to excute js in jsx */}
    </Card>
  );
}

export default DisplayExpense;
