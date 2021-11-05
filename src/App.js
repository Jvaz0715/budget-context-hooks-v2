import React, {useState, useEffect} from 'react';
// get our context files
import { HeaderContext, InputContext, ListsContext, } from "./context/context";
// get our components
import { Header, Inputs, Lists } from "./components";

import "./App.css";

function App() {
  const [income, setIncome] = useState(getHeaderInitialValue("income"));
  const [expense, setExpense] = useState(getHeaderInitialValue("expense"));

  const [option, setOption] = useState("+");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const [incomeArray, setIncomeArray] = useState(getListInitialValue("incomeArray"));
  const [expenseArray, setExpenseArray] = useState(getListInitialValue("expenseArray"));

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

  function handleDeleteIncome(index) {
    let incomeItemToDelete = incomeArray[index];
    setIncome(income - incomeItemToDelete.amount);

    let newIncomeArray = [...incomeArray];
    newIncomeArray.splice(index, 1);
    setIncomeArray(newIncomeArray);

  }
  function handleDeleteExpense(index) {
    let expenseItemToDelete = expenseArray[index];
    setExpense(expense - expenseItemToDelete.amount);
    let newExpenseArray = [...expenseArray];
    newExpenseArray.splice(index, 1);
    setExpenseArray(newExpenseArray);
  };

  function reset() {
    setIncome(0)
    setExpense(0)
    setIncomeArray([])
    setExpenseArray([])
  };

  function getListInitialValue(value) {
    return window.localStorage.getItem(value)
      ? JSON.parse(window.localStorage.getItem(value))
      : [];
  }

  function getHeaderInitialValue(value) {
    return window.localStorage.getItem(value)
      ? Number(window.localStorage.getItem(value))
      : 0;
  }

  useEffect(() => {
    SetLocalStorage();
  }, [income, expense, incomeArray, expenseArray]);

  function SetLocalStorage() {
    window.localStorage.setItem("income", income);
    window.localStorage.setItem("expense", expense);
    window.localStorage.setItem("incomeArray", JSON.stringify(incomeArray));
    window.localStorage.setItem("expenseArray", JSON.stringify(expenseArray));
    
  };

  const HeaderContextValue = {
    income,
    expense,
    reset
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
