import React, { useState } from 'react'
import Card from '../Card/Card'
import "../Expenseform/Expenseform.css"


export default function Expenseform(props)
{
const[ userinput , setuserinput ]=useState({date:"",title:"",cost:""})

function datehandler(event)
{
   // console.log("date received in expenseform is" ,  new Date(event.target.value));
  
   setuserinput ({...userinput ,  date:event.target.value })

}
function titlehandler(event)
{
  // console.log("title received in expenseform is" , event.target.value);
  
   setuserinput({...userinput ,  title:event.target.value })

}
function costhandler(event)
{
   //  console.log("cost received in expenseform is" , event.target.value);
   setuserinput({...userinput ,  cost:event.target.value })
}

function formsubmithandler(event)
{
  event.preventDefault();

  const newly_submitted_expense_usingform={
             title:userinput.title,
             cost:parseInt(userinput.cost),
             date:new Date(userinput.date),
             id: Math.floor((Math.random() * 10) + 1).toString()
            }

    // console.log("inside formsubmithandler",newly_submitted_expense_usingform);

    props.onformsubmit(newly_submitted_expense_usingform);


    setuserinput({ cost:"" , date:"" , title:"" })
}


const[show , setshow]=useState(false);

const formdisplayerhandler=(event)=>{
console.log(show);
const toggle= !show;
setshow( toggle)
}


  return (
    <Card  >
 <div className='Title-heading'>Expense Manager</div>
        <div>
            <input type="submit" className='formsubmitbtn' value={'show Expense form'} onClick={formdisplayerhandler}></input>
         </div>




         {/* <form   onSubmit={formsubmithandler}  style={{ visibility : !show ? "hidden": "visible" }}> */}
         <form   onSubmit={formsubmithandler}  style={{ display : !show ? "none": "block" , 
                                                         //  transition: 'all' ,
                                                         //  transitionTimingFunction:'ease-out',
                                                         //  transitionDuration: 'initial'

      
      }}>

   <div className='formclass' >
         <div >
            <label>Date</label>
            <input type="date" className='dateinputfromtextbox' onChange={datehandler} value={userinput.date}></input>
         </div>

         <div>
            <label>Title</label>
            <input type="text" className='inputfromtextbox' onChange={titlehandler} value={userinput.title}></input>
         </div>
        
         <div >
            <label>Cost</label>
            <input type="number" className='inputfromtextbox' onChange={costhandler} value={userinput.cost}></input>
         </div>

   </div>
   
  
        <div>
            <input type="submit" className='formsubmitbtn' value={'Add Expense'} ></input>
         </div>
        
         </form>
         
   

    </Card>
  )
}
