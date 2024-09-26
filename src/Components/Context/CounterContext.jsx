import React, { createContext, useState } from "react";

export const Contextcont = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };

  return (
    <div>
      <Contextcont.Provider value={{ count, increment }}>
        {children}
      </Contextcont.Provider>
    </div>
  );
};
