import "./ExpenseForm.css"
import { useState } from "react";

const  ExpenseForm = (props) => {
  // With help of multiple state
  const [enteredTitle, setEnteredTitle] = useState('');
  const [currentAmount, setCurrentAmount] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  // giving empty string for intial state.

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setCurrentAmount(event.target.value);
  }; 

  const DateChangeHandler = (event) => {
    setCurrentDate(event.target.value);
  };


  /* 
  // with single state
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });


  const titleChangeHandler = (event) => {
    // Don't use this way 
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    
    //
    setUserInput((prevState) =>{
      return {
        ...prevState,
        enteredTitle: event.target.value 
      };
    })
  };
  
  const amountChangeHandler = (event) =>{
    setUserInput((prevState) =>{
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    })
  };
  
  const DateChangeHandler = (event) =>{
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };
*/
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: currentAmount,
      date: new Date(currentDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setCurrentAmount('');
    setCurrentDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={currentAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            value={currentDate}
            onChange={DateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;