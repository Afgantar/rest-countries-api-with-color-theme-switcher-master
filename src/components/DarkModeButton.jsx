import React, { useState } from 'react';
import { IoMoonOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { useData } from "../context/DataContext";

const DarkModeButton = () => {
  const {useDark, setUseDark} = useData();

  function switchDarkHandler() {
    setUseDark(prev => !prev);
  }

  return (
    <button onClick={switchDarkHandler} className='flex items-center gap-[10px]'>
      {useDark ? (<IoMoon className='mobile:text-[18px] text-[14px] text-white animate-rotateIn' />) : (<IoMoonOutline className='mobile:text-[18px] text-[14px] text-very-dark-blue-txt animate-rotateIn' />)}
      <h3 className='mobile:text-[16px] text-[12px] font-semibold text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400'>Dark Mode</h3>
    </button>
  )
}

export default DarkModeButton