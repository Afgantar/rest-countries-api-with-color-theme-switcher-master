import React, { useEffect } from "react";
import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/Navbar";
import { useData } from "./context/DataContext";

const App = () => {
  const {useDark, setUseDark} = useData();

  useEffect(() => {
    let darkMode = sessionStorage.getItem('darkmode');
    if(darkMode === "true") {
      setUseDark(true);
    }
    else {
      setUseDark(false);
    }
  }, [])

  return (
    <div className={`${useDark ? "dark" : null}`}>
      <Navbar />
      <AllRoutes />
    </div>
  );
};

export default App;
