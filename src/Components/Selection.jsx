import React from 'react'
import Shirt from "./Shirt";
import { def } from "../Data/definitions";
import { useEffect, useState, } from "react";
import '../css/App.css'



export default function Selection(props) {



    const [shirts, setShirts] = useState(def);


  return (
    <div>


<div className="left-items">
        
        {shirts.map((option, index) => {
          return (
            <Shirt
              label={option}
              key={option.itemcode}
              ind={index}
              action={props.callback}
            />
          
          );
        })}

     
      </div>





    </div>
  )
}
