import React, {useState} from 'react';
// get our context files
import { HeaderContext, InputContext, ListsContext, } from "./context/context";
// get our components
import { Header, Inputs, Lists } from "./components";

import "./App.css";

function App() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const [option, setOption] = useState("+");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const [incomeArray, setIncomeArray] = useState([]);
  const [expenseArray, setExpenseArray] = useState([]);

  function handleOption(value) {
    setOption(value);
  };

  function handleDescription(value) {
    setDescription(value);
  };

  function handleAmount(value) {
    setAmount(value)
  };

  function handleSubmit(e) {
    e.preventDefault();
    if(amount === 0) {
      return;
    }
    if(option === "+") {
      setIncome(income + parseFloat(amount))
      setIncomeArray([...incomeArray, {description, amount}])
    } else if (option === "-"){
      setExpense(expense + parseFloat(amount))
      setExpenseArray([...expenseArray, {description, amount}])
    }
  }

  function handleDeleteIncome(index) {}
  function handleDeleteExpense(index) {}

  const HeaderContextValue = {
    income,
    expense
  };

  const InputContextValue = {
    option,
    description,
    amount,
    handleOption,
    handleDescription,
    handleAmount,
    handleSubmit,
  };

  const ListsContextValue = {
    incomeArray,
    expenseArray,
    handleDeleteIncome,
    handleDeleteExpense,
  }

  return (
    <div className="App">
      <HeaderContext.Provider value={HeaderContextValue}>
        <Header />
      </HeaderContext.Provider>
      
      <InputContext.Provider value={InputContextValue}>
        <Inputs />
      </InputContext.Provider>

      <ListsContext.Provider value={ListsContextValue}>
        <Lists />
      </ListsContext.Provider>
    </div>
  )
}

export default App
