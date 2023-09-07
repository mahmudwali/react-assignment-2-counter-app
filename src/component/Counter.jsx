import React, { useState } from "react";

const Card = () => {
  const [count, setCount] = useState(0);
  const handleInc =()=>{
    setCount((Count)=> Count +1 )

  }
   const handleDec=()=>{
    setCount((Count)=> Count -1 )
  }
   const handleReset=()=>{
    setCount(0)
  }

  return (
    <div>
      <div className="counter center">
        <h1 className="counter__title">Counter App</h1>
        <div className="card center">
          <h2 className="card__title">Count : {count}</h2>
          <div className="card__btns">
            <button className="btn card__btn" onClick={handleInc} disabled={count===5? true:false}>+</button>
            <button className="btn card__btn" onClick={handleDec} disabled={count===-5? true:false}>-</button>
            <button className="btn card__btn" onClick={handleReset}>0</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;



