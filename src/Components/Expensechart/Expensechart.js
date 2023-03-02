import React from 'react'


import Chart from "../Chart/Chart"




export default function Expensechart(props) {

    const chartDataPoints=[
        {label:"Jan" , value:0},
        {label:"feb" , value:0},
        {label:"Mar" , value:0},
        {label:"Apr" , value:0},
        {label:"May" , value:0},
        {label:"Jun" , value:0},
        {label:"Jully" , value:0},
        {label:"Aug" , value:0},
        {label:"Sep" , value:0},
        {label:"Oct" , value:0},
        {label:"Nov" , value:0},
        {label:"Dec" , value:0},
    ]



    for (let Expense of props.FilteredExpenseArraybyYear)
     {
       //   console.log(Expense)
           const particularMonth = Expense.date.getMonth();      
        //   console.log(particularMonth);
          chartDataPoints[particularMonth].value +=  Expense.cost;
       //   console.log(chartDataPoints);
     }
 
 

  return (
    <div>

        <Chart UpdatedMonthlyExpenseinArray={chartDataPoints}></Chart> 
    </div>
  )
}
