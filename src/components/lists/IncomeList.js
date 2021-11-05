import React, {useContext} from 'react';
import {ListsContext} from "../../context/context";

function IncomeList() {
   const {incomeArray, handleDeleteIncome} = useContext(ListsContext);

   return (
      <div style={{border:"2px solid blue", width: "50%"}}>
         <h2>Income</h2>
         <ul>
            {incomeArray.map((income, index) => {
               return (
                  <li key={index}>
                     {income.description} {income.amount}
                     <button onClick={()=> handleDeleteIncome(index)}>Delete</button>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default IncomeList
