import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { store } from "..";
export default function Counter() {
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();
  let number = useSelector((state) => state);
  let count = store.getState();
  useEffect(() => {
    setCounter(number);
  }, [number]);
  return (
    <div>
      <h1>Number : {number}</h1>
      <h1>Number : {count}</h1>
      <button onClick={() => dispatch({ type: "ADD-2" })}>
        Tăng number thêm 2
      </button>
      <button onClick={() => dispatch({ type: "NHAN-2" })}>Nhân 2</button>

      <div>
        <input
          type={"number"}
          value={counter}
          onChange={(e) => setCounter(e.target.value)}
          placeholder="Nhap so muon cap nhat"
        />
        <button onClick={() => dispatch({ type: "UPDATE", payload: counter })}>
          Update
        </button>
      </div>
    </div>
  );
}
