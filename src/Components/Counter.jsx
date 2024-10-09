import React, { useState } from "react";
import '../csssheets/Counter.css'


function Counter() {
  const [count,setCount] = useState(1);

  const arti = () => {
    setCount(count+1)
  }

  const eksi = () => {
    if (count > 1) {setCount(count-1)}
  }


  return (
    <div>
      <div className="counter-container">
        <button className="button" onClick={eksi}>-</button>
        <h3  className="count" >{count}</h3>
        <button className="button" onClick={arti}>+</button>
      </div>

    
    </div>
  )
}

export default Counter;