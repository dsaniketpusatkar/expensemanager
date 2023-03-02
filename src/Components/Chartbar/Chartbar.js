import React from 'react'
import "../Chartbar/Chartbar.css"

export default function Chartbar(props) 
{
  let barfilledheight="0%"


  if(props.maxvalue > 0)
  {
   // console.log(props.value );
   // console.log(props.maxvalue);
   
      barfilledheight = Math.round((props.value / props.maxvalue)*100).toString() + '%';
    //  console.log("inside chartbar",{barfilledheight});
  }

  return (
    <div className='singlechart'>
      <div className='singlechart_fill'>
         <div className='chart-bar__fill' style={{height: barfilledheight}}></div>
      </div>
      
      <div>
      <div className='chart-bar__label' >{props.label}</div>
      </div>
      
    </div>
  )
}
