import React, { useContext } from "react";
import { Contextcont } from "./CounterContext";

function CartComp() {
  const { count } = useContext(Contextcont);

  return (
    <div>
      <h1>card-{count}</h1>
    </div>
  );
}
export default CartComp;
