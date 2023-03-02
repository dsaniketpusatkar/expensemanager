

import React from 'react'
import '../Card/Card.css'

export default function Card (props)
{
    const coustomclass = "Card "+ props.className
  return (    
    <div className={coustomclass}>{props.children}</div>
  )
}

