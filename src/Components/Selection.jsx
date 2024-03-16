import React from 'react'
import Shirt from "./Shirt";

import '../css/App.css'



export default function Selection(props) {





  return (
<>
      
<div><h4>You might also be interested in...</h4></div>

<div className="selection">
        
        {props.label.map((option, index) => {
          return (
            <Shirt
              label={option}
              key={option.itemcode+index}
              ind={-4}
              index={index}
          action={props.action}
            />
          
          );
        })}

     
      </div>





  </>
  )
}
