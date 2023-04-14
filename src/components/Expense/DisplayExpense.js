import ExpenseItems from "./ExpenseItems";
import "./DisplayExpense.css"

function DisplayExpense(props) {
  return (
    <div className="expenses">
      <ExpenseItems
        title={props.listItems[0].title}
        amount={props.listItems[0].amount}
        date={props.listItems[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.listItems[1].title}
        amount={props.listItems[1].amount}
        date={props.listItems[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.listItems[2].title}
        amount={props.listItems[2].amount}
        date={props.listItems[2].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.listItems[3].title}
        amount={props.listItems[3].amount}
        date={props.listItems[3].date}
      ></ExpenseItems>
    </div>
  );
}

export default DisplayExpense;