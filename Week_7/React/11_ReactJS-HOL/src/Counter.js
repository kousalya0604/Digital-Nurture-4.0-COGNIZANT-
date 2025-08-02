import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    console.log('Hello! This is a static message.');
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  );
}

export default Counter;
