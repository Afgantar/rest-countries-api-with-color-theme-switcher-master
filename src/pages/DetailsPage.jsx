import React, { useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import BordersButton from "../components/BordersButton";

const DetailsPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { countriesData } = useData();
  const selectedCountry = countriesData.find(
    (country) => country.name === name
  );

  function addCommasToNumberString(input) {
    const numberValue = parseFloat(input);
    return numberValue.toLocaleString();
  }

  function findBorderCountryName(alpha3Code) {
    const countryData = countriesData.find((country) => country.alpha3Code === alpha3Code);
    return countryData.name;
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
          <p className="font-semibold text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">Back</p>
        </button>
      </div>
      <div className="mt-[65px] w-full flex flex-col mobile:flex-row mobile:justify-between justify-center items-center animate-slideRight gap-[50px] mobile:gap-0">
        <div className="flex-1 flex items-center">
          <img src={selectedCountry.flags.png} alt="" className="mobile:w-[75%] w-full" />
        </div>
        <div className="flex-1 flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[30px]">
            <h1 className="font-bold text-[28px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">{selectedCountry.name}</h1>
            <div className="flex mobile:flex-row flex-col mobile:gap-0 gap-[50px] w-full justify-between">
              <div className="flex-1">
                <p className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
                  <strong className="text-[16px]">Native Name: </strong>
                  {selectedCountry.nativeName}
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
                  {selectedCountry.subregion}
                </p>
                <p className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
                  <strong className="text-[16px]">Capital: </strong>
                  {selectedCountry.capital}
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
                  <strong className="text-[16px]">Top Level Domain: </strong>
                  {selectedCountry.topLevelDomain}
                </p>
                <p className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
                  <strong className="text-[16px]">Currencies: </strong>
                  {selectedCountry.currencies.map((currency, index) => (`${currency.name}${(selectedCountry.currencies.length - 1 === index ? "" : ", ")}`))}
                </p>
                <p className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
                  <strong className="text-[16px]">Languages: </strong>
                  {selectedCountry.languages.map((language, index) => (`${language.name}${(selectedCountry.languages.length - 1 === index ? "" : ", ")}`))}
                </p>
              </div>
            </div>
          </div>
          <div className="flex mobile:flex-row flex-col gap-[20px] mobile:items-center mobile:gap-[10px]">
            <p><strong className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">Border Countries: </strong></p>
            <div className="flex items-center gap-[10px] flex-wrap">
              {selectedCountry.borders ? (selectedCountry.borders.map((border) => (
                <BordersButton key={border} name={findBorderCountryName(border)} />
              ))) : (<p className="text-[16px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">No bordering countries</p>) }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
