import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

export function Counter() {
  const [inputAmount, setInputAmount] = useState(1);

  const handleChange = (e) => {
    setInputAmount(e.target.value);
  };

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
