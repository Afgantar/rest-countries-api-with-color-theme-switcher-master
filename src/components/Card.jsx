import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ img, name, pops, region, capital }) => {
  const navigate = useNavigate();

  function addCommasToNumberString(input) {
    const numberValue = parseFloat(input);
    return numberValue.toLocaleString();
  }

  function toDetailPage() {
    navigate(`/details/${name}`);
  }

  return (
    <div
      onClick={toDetailPage}
      className="bg-white dark:bg-dark-blue flex flex-col rounded-[10px] overflow-hidden shadow-light transition-all ease-in-out duration-400 cursor-pointer animate-summon"
    >
      <div
        className="w-full aspect-[3/2] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="bg-black/20 backdrop-blur-[10px]">
          <div
            className="w-full aspect-[3/2] bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>
      </div>
      <div className="grow flex flex-col px-[20px] py-[30px] gap-[10px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
        <p className="text-[18px] font-bold">{name}</p>
        <div>
          <p>
            <strong>Population:</strong> {addCommasToNumberString(pops)}
          </p>
          <p>
            <strong>Region:</strong> {region}
          </p>
          <p>
            <strong>Capital:</strong>{" "}
            {capital !== undefined && (capital.map(
              (city, index) =>
                `${city}${capital.length - 1 === index ? "" : ", "}`
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
