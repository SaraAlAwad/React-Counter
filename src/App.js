import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
    console.log(count)
  }
  function decrement() {
    setCount(count - 1)
    console.log(count)
  }
  function reset() {
    setCount(0)
    console.log(count)
  }
  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
