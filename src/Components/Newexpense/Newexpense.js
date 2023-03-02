import React from 'react'
import Expenseform from '../Expenseform/Expenseform'

export default function Newexpense(props) {


function newlysubmitedexpense( data_object_coming_from_expense_form  )
{
  console.log("inside newexpense",data_object_coming_from_expense_form);


 props.getting_newly_done_expense(data_object_coming_from_expense_form);

}



  return (
    <div>
        <Expenseform onformsubmit={newlysubmitedexpense} />
    </div>
  )
}
