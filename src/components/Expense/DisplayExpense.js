import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./FilterExpense";
import "./DisplayExpense.css";
import Card from "../UI/Card";
import { useState } from "react";

function DisplayExpense(props) {

  const [filterYear,setFilterYear] = useState('2020')

  const filterChangeHandler = (selectedYear) =>{
    console.log(selectedYear);
    // setFilterYear((filterYear) => (filterYear = selectedYear));
    setFilterYear(selectedYear);
  }
  // console.log(filterYear);

  const filterExpense = props.listItems.filter((value) => {
    return value.date.getFullYear().toString() === filterYear;
    // or use == if can't convert to string
  }
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filterYear}
        onSelect={filterChangeHandler}
      ></ExpenseFilter>

      {filterExpense.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default DisplayExpense;
