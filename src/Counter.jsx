import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment1 = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement1 = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <div>
        <h2>Counter: {count}</h2>
      </div>
      <button onClick={increment1}>Increment</button>
      <button onClick={decrement1}>Decrement</button>
    </div>
  );
};

export default Counter;
