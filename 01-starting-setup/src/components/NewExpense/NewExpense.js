import React, { useState } from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    const[isAdding, setIsAdding] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsAdding(false);
    };

    function startAddingHandler()
    {
        setIsAdding(true);
    }

    function stopAddingHandler()
    {
        setIsAdding(false);
    }

    let displayExpenseForm = <button onClick={startAddingHandler}>Add New Expense</button>;

    if(isAdding)
    {
        displayExpenseForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopAddingHandler}/>;
    }

    return (
    <div className="new-expense">
        {displayExpenseForm}
    </div>);
};

export default NewExpense;