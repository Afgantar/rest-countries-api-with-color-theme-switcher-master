import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useData } from "../context/DataContext";

const HomePage = () => {
  const [showFilter, setShowFilter] = useState({
    animation: false,
    component: false,
  });
  const [query, setQuery] = useState({
    search: "",
    filter: "",
  });
  const { countriesData } = useData();
  const wantedCountry = countriesData.filter((country) => {
    return (
      country.name.toLowerCase().includes(query.search.toLowerCase()) &&
      country.region.toLowerCase().includes(query.filter.toLowerCase())
    );
  });

  useEffect(() => {
    let initialData = JSON.parse(sessionStorage.getItem("querydata"));
    if (!initialData) return;
    setQuery({
      search: initialData.search,
      filter: initialData.filter,
    });
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      "querydata",
      JSON.stringify({
        search: query.search,
        filter: query.filter,
      })
    );
  }, [query]);

  function showFilterHandler() {
    if (!showFilter.component) {
      setShowFilter((prev) => ({
        animation: !prev.animation,
        component: !prev.component,
      }));
    }
    if (showFilter.component) {
      setShowFilter((prev) => ({
        ...prev,
        animation: !prev.animation,
      }));
    }
  }

  function searchHandler(e) {
    setQuery({
      ...query,
      search: e.target.value,
    });
  }

  function filterHandler(e) {
    setQuery({
      ...query,
      filter: e.target.dataset.name,
    });
  }

  return (
    <div className="flex flex-col min-h-screen justify-center w-full tablet:px-[70px] mobile:px-[50px] px-[20px] bg-very-light-gray dark:bg-very-dark-blue pt-[125px] gap-[45px] transition-all ease-in-out duration-400">
      <div className="w-full flex tablet:flex-row flex-col tablet:justify-between tablet:items-center tablet:gap-0 gap-[40px]">
        <div className="bg-white dark:bg-dark-blue flex items-center justify-between big-tablet:w-[38%] tablet:w-[50%] w-full px-[30px] py-[15px] gap-[20px] shadow-light rounded-[5px] transition-all ease-in-out duration-400 animate-slideRight">
          <IoSearch className="text-[18px] text-dark-gray dark:text-white transition-all ease-in-out duration-400" />
          <input
            type="text"
            placeholder="Search for a country..."
            className="grow outline-none text-dark-gray dark:text-white dark:placeholder:text-white placeholder:text-dark-gray bg-transparent transition-all ease-in-out duration-400"
            value={query.search}
            onChange={searchHandler}
          />
        </div>
        <div className="big-tablet:w-[15%] w-fit min-w-[50%] tablet:min-w-[25%] big-tablet:min-w-0 relative">
          <div
            onClick={showFilterHandler}
            className="flex justify-between items-center bg-white dark:bg-dark-blue px-[20px] py-[15px] shadow-light rounded-[5px] big-tablet:gap-0 gap-[10px] cursor-pointer transition-all ease-in-out duration-400 animate-drop"
          >
            <p className="font-semibold text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400 select-none">
              {query.filter ? query.filter : "Filter by Region"}
            </p>
            <IoIosArrowDown className="dark:text-white transition-all ease-in-out duration-400" />
          </div>
          <div
            className={`bg-white dark:bg-dark-blue shadow-light absolute w-full rounded-[5px] translate-y-[6px] p-[20px] z-10 transition-all ease-in-out duration-400 ${
              showFilter.component ? null : "hidden"
            } ${
              showFilter.animation
                ? "animate-optionDrop"
                : "animate-reverseOptionDrop"
            }`}
            onAnimationEnd={() => {
              if (!showFilter.animation) {
                setShowFilter((prev) => ({
                  ...prev,
                  component: !prev.component,
                }));
              }
            }}
          >
            <div className="flex flex-col gap-[5px] font-semibold text-very-dark-blue-txt transition-all ease-in-out duration-400 dark:text-white">
              <p
                data-name="Africa"
                className="cursor-pointer select-none"
                onClick={filterHandler}
              >
                Africa
              </p>
              <p
                data-name="America"
                className="cursor-pointer select-none"
                onClick={filterHandler}
              >
                America
              </p>
              <p
                data-name="Asia"
                className="cursor-pointer select-none"
                onClick={filterHandler}
              >
                Asia
              </p>
              <p
                data-name="Europe"
                className="cursor-pointer select-none"
                onClick={filterHandler}
              >
                Europe
              </p>
              <p
                data-name="Oceania"
                className="cursor-pointer select-none"
                onClick={filterHandler}
              >
                Oceania
              </p>
              <p
                data-name=""
                className="cursor-pointer select-none"
                onClick={filterHandler}
              >
                Remove filter
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 big-tablet:grid-cols-4 w-full gap-[70px] px-[20px] mobile:px-0">
        {wantedCountry.length !== 0 &&
          wantedCountry.map((country) => (
            <Card
              key={country.name}
              img={country.flags.png}
              name={country.name}
              pops={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
      </div>
      {wantedCountry.length === 0 && (
        <p className="font-bold text-[20px] text-very-dark-blue-txt dark:text-white transition-all ease-in-out duration-400">
          No matching countries found
        </p>
      )}
    </div>
  );
};

export default HomePage;
