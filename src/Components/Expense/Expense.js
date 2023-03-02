
import React from 'react'
import Card from '../Card/Card'
import { useState } from "react"
import Expenseitem from "./Expenseitem"
import "../Expense/Expense.css"
import Expensefilter from '../Expensefilter/Expensefilter'
import Expensechart from "../Expensechart/Expensechart"



export default function Expense(props) {

const [yearforfilter , setYear ] = useState('2023')

const selectedyear=( userselectedyear )=>
{
setYear(userselectedyear)
//console.log("inexpense.js" , userselectedyear);

}

 const filteredArraybySelectedYear = props.item.filter(checkYear)

//console.log("filtered array",filteredArraybySelectedYear);

 function checkYear(e) 
 {
      if(e.date.getFullYear().toString() === yearforfilter )
      {return (e);} 
 }

// const filteredArraybySelectedYear = props.item.filter(e)=>{ return (e.date.getFullYear() === yearforfilter ) }











return (


<Card className="Expense">

<Expensefilter onChangeFilter={selectedyear} onSelect={yearforfilter}/>


<Expensechart FilteredExpenseArraybyYear={ filteredArraybySelectedYear } ></Expensechart>


{filteredArraybySelectedYear.length === 0 ? (<p>NO Expenses Found for this particular year </p> ) : (filteredArraybySelectedYear.map((distinctexpense) => (<Expenseitem datareceived={distinctexpense} />)))}

{/* { props.item.map( (distinctexpense)=>{return( <Expenseitem datareceived={distinctexpense} />)}) } 
 */}

{/* 
 { filteredArraybySelectedYear.map( (distinctexpense)=>{return( <Expenseitem datareceived={distinctexpense} />)}) }
 */}

</Card>









// <Card className="Expense">

// {
// props.item.map( (obj)=>{return(
// <Expenseitem
// // id={obj.id}
// title={obj.title}
// cost={obj.cost}
// date={obj.date}
// // key={obj.id}
// />

// )})
// } 

// </Card>


)
}

