import React, { createContext, useContext, useEffect, useState } from "react";
import SourceData from "../utils/data.json";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const countriesData = SourceData;
  const [useDark, setUseDark] = useState(false);

  useEffect(() => {
    sessionStorage.setItem('darkmode', useDark);
  }, [useDark])

  return (
    <DataContext.Provider value={{ useDark, setUseDark, countriesData }}>
      {children}
    </DataContext.Provider>
  );
}
