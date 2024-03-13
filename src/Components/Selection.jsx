import React from 'react'
import Shirt from "./Shirt";
import { def } from "../Data/definitions";
import { useEffect, useState, } from "react";
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
              key={option.itemcode}
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
