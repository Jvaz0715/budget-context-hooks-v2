import React, {useContext} from 'react';
import {HeaderContext} from "../../context/context"

function Header() {
   const {income, expense } = useContext(HeaderContext);
   return (
      <div style={{margin: "20px"}}>
         <div>
         Total Budget {income + -(expense)}
         </div>
         <div>Income: {income}</div>
         <div>Expense: {expense}</div>
         
      </div>
   )
};

export default Header;
