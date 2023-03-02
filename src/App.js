
import { useState } from 'react';
import './App.css';

import Expense from './Components/Expense/Expense';
import Newexpense from './Components/Newexpense/Newexpense';

const data=[
  {
    date:new Date("2020-10-25"),
    title:"Food",
    cost:600
  },
  {
    date:new Date("2023-03-26"),
    title:"Rent",
    cost:600
  },
  {
    date:new Date("2022-03-27"),
    title:"Travel",
    cost:600
  },
]







function App() {

  const[ expensearray , setexpensearray ]=useState(data)

  function adding_new_expense_to_earlier_data_handler(newexpensedata)
  {
    
    
  
  setexpensearray([newexpensedata , ...expensearray]);

 // console.log("from app.js",newexpensedata);
  }


  return (
    <div className='bgimg'>
   <div >
    <Newexpense  getting_newly_done_expense={ adding_new_expense_to_earlier_data_handler }/>
    
    <Expense item={expensearray} />
   </div>
   </div>
  );
}

export default App;
