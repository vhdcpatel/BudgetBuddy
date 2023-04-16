import ExpenseFilter from "./FilterExpense";
import ExpensesList from "./ExpensesList";
import "./DisplayExpense.css";
import Card from "../UI/Card";
import { useState } from "react";

function DisplayExpense(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    // setFilterYear((filterYear) => (filterYear = selectedYear));
    setFilterYear(selectedYear);
  };
  // console.log(filterYear);

  const filterExpense = props.listItems.filter((value) => {
    return value.date.getFullYear().toString() === filterYear;
    // or use == if can't convert to string
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filterYear}
          onSelect={filterChangeHandler}
        ></ExpenseFilter>
        <ExpensesList expenseList={filterExpense}></ExpensesList>
      </Card>
    </li>
  );
}

export default DisplayExpense;
