import ExpenseItems from "./ExpenseItems";
import "./DisplayExpense.css"
import Card from "../UI/Card"

function DisplayExpense(props) {
  return (
    <Card className="expenses">
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