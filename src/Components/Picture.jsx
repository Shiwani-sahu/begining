import React from 'react'
import Shiwani from "../assets/Shiwani.jpeg";
import { useState } from 'react';
import "../App.css";
const Picture = () => {

  const[count ,setCount] =useState(0);
  const increment =() => {
    setCount(count+1);
  }
  const decrement =() => {
    setCount(count-1);
  }

  return (
    <div>
        <img  className = 'image' src = {Shiwani}  alt = "My-image"/>
     <div> <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </div>
    </div>
  )
}
export default Picture;