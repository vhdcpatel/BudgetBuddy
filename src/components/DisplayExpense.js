import ExpenseItems from "./ExpenseItems";

function DisplayExpense(props) {
  <div>
    <ExpenseItems
      title={props.list[0].title}
      amount={props.list[0].amount}
      date={props.list[0].date}
    ></ExpenseItems>
    <ExpenseItems
      title={props.list[1].title}
      amount={props.list[1].amount}
      date={props.list[1].date}
    ></ExpenseItems>
    <ExpenseItems
      title={props.list[2].title}
      amount={props.list[2].amount}
      date={props.list[2].date}
    ></ExpenseItems>
    <ExpenseItems
      title={props.list[3].title}
      amount={props.list[3].amount}
      date={props.list[3].date}
    ></ExpenseItems>
  </div>;
}

export default DisplayExpense;