import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css";

function Lowerheader() {
  return (
    <div className={classes.lower__container}>
       
        <ul>
            <li><AiOutlineMenu /></li>
            <li><p>All</p></li>
            <li>Today's Deals</li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>
      
    </div>
  )
}

export default Lowerheader

