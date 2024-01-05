import React from "react";
import { useNavigate } from "react-router-dom";

const BordersButton = ({ name }) => {
  const navigate = useNavigate();

  function borderHandler() {
    navigate(`/details/${name}`);
  }

  return (
    <button
      onClick={borderHandler}
      className="bg-white shadow-light px-[10px] py-[3px] rounded-[5px] text-[16px] dark:bg-dark-blue text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400"
    >
      {name}
    </button>
  );
};

export default BordersButton;
