import "./ExpenseForm.css";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  //the onChange gives the (event)
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //event.target.value is the value passed inside the input in the form
  };

  const [enteredAmount, setEnteredAmount] = useState("");

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //IMPORTANT REMEMBER
  //when your state update depends on the previous state
  //pass in the previous state as an argument in a function
  //   setUserInput((prevState) => {
  //     return {...prevState, enteredTitle: event.target.value}
  //   })
  //to ensure it always operate in the actual state

  return (
    <div className="new-expense">
      <form className="expense-form">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" onChange={dateChangeHandler} />
          </div>
          <div className="new-expense__actions"></div>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
