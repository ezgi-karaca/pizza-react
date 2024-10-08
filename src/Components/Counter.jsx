import React, { useState } from "react";

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
      <button onClick={eksi}>-</button>
      <h3>{count}</h3>
      <button onClick={arti}>+</button>
    </div>
  )
}

export default Counter;