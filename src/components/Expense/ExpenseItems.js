import { useState } from 'react';

import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card"
const  ExpenseItems = (props) => {
  
  const [title,setTitle] =  useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
    // schedule value change not update title variable write way 
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItems;