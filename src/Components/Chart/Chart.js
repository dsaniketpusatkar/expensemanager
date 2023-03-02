import React from 'react'
import Chartbar from "../Chartbar/Chartbar"

import "../Chart/Chart.css"

export default function Chart(props) {

  const ArrayofValueofJustMonthlyExpenses = props.UpdatedMonthlyExpenseinArray.map((expense)=>expense.value)
  const maxExpenseAmoungAllMonthsInAYear = Math.max(...ArrayofValueofJustMonthlyExpenses)  




  return (
    <div className='Chart'>
    {    
         props.UpdatedMonthlyExpenseinArray.map((eachmonth)=>
            (  <Chartbar key = {eachmonth.label}  
                 value={eachmonth.value} 
                 maxvalue={maxExpenseAmoungAllMonthsInAYear} 
                 label = {eachmonth.label} />

            )         
        )     
    }
    </div>
  );
};
