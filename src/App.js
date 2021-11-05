import React, {useState} from 'react';
import {
  Header,
  Inputs,
  Lists
} from "./components";

import "./App.css";

function App() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const [option, setOption] = useState("+");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const [incomeArray, setIncomeArray] = useState([]);
  const [expenseArray, setExpenseArray] = useState([]);
  return (
    <div className="App">
      <Header />
      <Inputs />
      <Lists />
    </div>
  )
}

export default App
