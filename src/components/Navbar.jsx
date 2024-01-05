import React from "react";
import DarkModeButton from "./DarkModeButton";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center bg-white dark:bg-dark-blue tablet:px-[70px] mobile:px-[50px] px-[20px] py-[20px] z-10 shadow-md transition-all ease-in-out duration-400 animate-drop">
      <h1 className="mobile:text-[25px] text-[16px] font-extrabold text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
        Where in the world?
      </h1>
      <DarkModeButton />
    </div>
  );
};

export default Navbar;
