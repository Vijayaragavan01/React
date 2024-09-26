import React, { useContext } from "react";
import { Contextcont } from "./CounterContext";

function ProductCart() {
  const { increment } = useContext(Contextcont);

  return (
    <>
      <h1>IQOO MOBILE</h1>
      <button onClick={increment}>add to cart</button>
    </>
  );
}

export default ProductCart;
