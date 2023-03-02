


import React from 'react'
import Card from '../Card/Card'
import Date from '../Date/Date'
import '../Expense/Expenseitem.css'


export default function Expenseitem(props) {
  


  return (
    
      <div className='expenseitem'>
        
    
     <div className='dateclass'>
      <Date datereceived={props.datareceived.date}/>
      
      </div>

      <div className='titleclass'>
         {/* {props.title} */}
         {props.datareceived.title}
      </div>

      <div className='costclass'>
        {props.datareceived.cost}
      </div>

      {/* <div className='change_title'>
      <button type="button" name="myButton">
	         Click me!
             </button>
      </div> */}

      </div>

      
    
  )
}
