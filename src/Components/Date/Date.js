




import React from 'react'
import "../Date/Date.css"
export default function Date(props) {



console.log("hello  from date compon", props.datereceived);


const datenumber=props.datereceived.getDate()
console.log(datenumber);


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getMonth= months[props.datereceived.getMonth()] + "  ";

console.log(getMonth);

const getFullYear=props.datereceived.getFullYear()
console.log(getFullYear);

  return (
  
    <div className='datewrapper'>

     <div className='datenumber'>
      {datenumber}
      </div>
<div className='monthyear_tobe_flexed'>
      <div className='datemonth'>
      {getMonth }
      
      </div>

      <div className='dateyear'>
      
      {getFullYear}

      </div>
 </div>
    </div>
    
  )
}
