import "./App.css";
import { useState } from "react";

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
      <p>Current count is : {count}</p>

      <button onClick={increase}>Plus</button>
      <button onClick={decrease}>Minus</button>
    </div>
  );
}

export default App;
