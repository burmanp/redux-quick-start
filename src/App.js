import "./App.css";
import { useState } from "react";
import { Counter } from "./features/counter/Counter";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    return setCount(count + 1);
  };

  const decrease = () => {
    return setCount(count - 1);
  };
  return (
    <div className="App">
      <h2>useState Counter</h2>
      <p>Current count is : {count}</p>

      <button onClick={increase}>Plus</button>
      <button onClick={decrease}>Minus</button>
      <hr />
      <h2>Redux counter</h2>
      <Counter />
    </div>
  );
}

export default App;
