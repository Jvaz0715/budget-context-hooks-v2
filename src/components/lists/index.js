import React from 'react';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';

function Lists() {
   return (
      <div style={{display: 'flex', border:"2px solid red", width:"100%"}}>
         <IncomeList />
         <ExpenseList />
      </div>
   )
}

export default Lists;
