import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [countriesData, setCountriesData] = useState([]);
  const [useDark, setUseDark] = useState(false);

  useEffect(() => {
    sessionStorage.setItem('darkmode', useDark);
  }, [useDark])

  useEffect(() => {
    async function getCountries() {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')

        const data = await response.data;
        const sortedData = data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        setCountriesData(sortedData);
      } catch (error) {
        console.log(error);
      }
    }

    getCountries();
  }, []);

  return (
    <DataContext.Provider value={{ useDark, setUseDark, countriesData }}>
      {children}
    </DataContext.Provider>
  );
}
