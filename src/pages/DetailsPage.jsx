import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import BordersButton from "../components/BordersButton";

const DetailsPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { countriesData } = useData();
  const selectedCountry = countriesData.find(
    (country) => country.name.common === name
  );

  function addCommasToNumberString(input) {
    const numberValue = parseFloat(input);
    return numberValue.toLocaleString();
  }

  function findBorderCountryName(cca3) {
    const countryData = countriesData.find(
      (country) => country.cca3 === cca3
    );
    return countryData.name.common;
  }

  return (
    <div className="pt-[150px] min-h-screen tablet:px-[70px] mobile:px-[50px] px-[20px] pb-[70px] bg-very-light-gray dark:bg-very-dark-blue transition-all ease-in-out duration-400">
      <div className=" animate-slideRight">
        <button
          onClick={() => {
            navigate("/home");
          }}
          className="shadow-heavy bg-white dark:bg-dark-blue flex justify-between items-center gap-[5px] px-[25px] py-[5px] rounded-[5px] transition-all ease-in-out duration-400"
        >
          <IoIosArrowRoundBack className="text-[25px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400" />
          <p className="font-semibold text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
            Back
          </p>
        </button>
      </div>
      {(selectedCountry !== undefined) && (<div className="mt-[65px] w-full flex flex-col mobile:flex-row mobile:justify-between justify-center items-center animate-slideRight gap-[50px] mobile:gap-0">
        <div className="flex-1 flex items-center">
          <img
            src={selectedCountry.flags.png}
            alt=""
            className="mobile:w-[75%] w-full"
          />
        </div>
        <div className="flex-1 flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[30px]">
            <h1 className="font-bold text-[28px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
              {selectedCountry.name.common}
            </h1>
            <div className="flex mobile:flex-row flex-col mobile:gap-[20px] gap-[50px] w-full justify-between">
              <div className="flex-1">
                <p className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
                  <strong className="text-[16px]">Native Name: </strong>
                  {selectedCountry.name.nativeName !== undefined ? Object.keys(selectedCountry.name.nativeName).map((key, index) => (
                    `${selectedCountry.name.nativeName[key].official}${Object.keys(selectedCountry.name.nativeName).length - 1 === index ? "" : ", "}`
                  )) : "-"}
                </p>
                <p className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
                  <strong className="text-[16px]">Population: </strong>
                  {addCommasToNumberString(selectedCountry.population)}
                </p>
                <p className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
                  <strong className="text-[16px]">Region: </strong>
                  {selectedCountry.region}
                </p>
                <p className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
                  <strong className="text-[16px]">Sub Region: </strong>
                  {selectedCountry.subregion ? selectedCountry.subregion : "-"}
                </p>
                <p className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
                  <strong className="text-[16px]">Capital: </strong>
                  {selectedCountry.capital !== undefined ? selectedCountry.capital.map((city, index) => (
                    `${city}${selectedCountry.capital.length - 1 === index ? "" : ", "}`
                  )) : "-"}
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
                  <strong className="text-[16px]">Top Level Domain: </strong>
                  {selectedCountry.tld.map((domain, index) => (
                    `${domain}${selectedCountry.tld.length - 1 === index ? "" : ", "}`
                  ))}
                </p>
                <p className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
                  <strong className="text-[16px]">Currencies: </strong>
                  {selectedCountry.currencies !== undefined ? Object.keys(selectedCountry.currencies).map((key, index) => (
                    `${selectedCountry.currencies[key].name}(${selectedCountry.currencies[key].symbol})${Object.keys(selectedCountry.currencies).length - 1 === index ? "" : ", "}`
                  )) : "-"}
                </p>
                <p className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
                  <strong className="text-[16px]">Languages: </strong>
                  {selectedCountry.languages !== undefined ? Object.keys(selectedCountry.languages).map((key, index) => (
                    `${selectedCountry.languages[key]}${Object.keys(selectedCountry.languages).length - 1 === index ? "" : ", "}`
                  )) : "-"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex mobile:flex-row flex-col gap-[20px] mobile:items-center mobile:gap-[10px]">
            <p>
              <strong className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
                Border Countries:{" "}
              </strong>
            </p>
            <div className="flex items-center gap-[10px] flex-wrap">
              {selectedCountry.borders ? (
                selectedCountry.borders.map((border) => (
                  <BordersButton
                    key={border}
                    name={findBorderCountryName(border)}
                  />
                ))
              ) : (
                <p className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
                  No bordering countries
                </p>
              )}
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
};

export default DetailsPage;
