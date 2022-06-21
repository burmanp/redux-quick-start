import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

export function Counter() {
  const [inputAmount, setInputAmount] = useState(1);

  // takes and stores the value of the input field
  const handleChange = (e) => {
    setInputAmount(e.target.value);
  };
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
  const count = useSelector((state) => state.counters.count);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{count}</span>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>

        <input value={inputAmount} onChange={handleChange} />

        <button
          onClick={() => dispatch(incrementByAmount(parseInt(inputAmount)))}
        >
          custom increment
        </button>
        <br />
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </div>
  );
}
