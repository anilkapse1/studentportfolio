import React, { createContext, useState } from "react";

export const PageIndex = createContext();

const Context = ({ children }) => {
  const [page, setPage] = useState(1);

  return (
    <PageIndex.Provider value={{ page, setPage }}>
      {children}
    </PageIndex.Provider>
  );
};

export default Context;
