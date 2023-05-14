import React, { useReducer } from "react";
import { produce } from "immer";
const INCRESE = "increse";
const DECRESE = "decrese";
const reducer = (state, action) => {
  switch (action.type) {
    case INCRESE:
      state.count = state.count + 1;
      return;
    case DECRESE:
      state.count = state.count - 1;
      return;
    default:
      return;
  }
};
function Middle() {
  const [state, dispatch] = useReducer(produce(reducer), { count: 0 });
  const increment = () => {
    dispatch({
      type: INCRESE,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECRESE,
    });
  };
  return (
    <div>
      <p>The count is {state.count}</p>
      <button onClick={increment}>Increse</button>
      <button onClick={decrement}>Decrese</button>
    </div>
  );
}
export default Middle;
