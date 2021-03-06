import React, { useContext } from 'react';
import { ListsContext } from "../../context/context";

function ExpenseList() {
   const { expenseArray, handleDeleteExpense } = useContext(ListsContext);
   
   return (
      <div style={{border:"2px solid green", width: "50%"}}>
         <h2>Expense</h2>
         <ul>
            {expenseArray.map((expense, index) => {
               return (
                  <li key={index}>
                     {expense.description} {expense.amount}
                     <button onClick={() =>handleDeleteExpense(index)}>Delete</button>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default ExpenseList;
