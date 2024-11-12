import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestons, setSuggestionns] = useState([]);
  const [showsuggestons, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestion = async () => {
    console.log(searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestionns(json[1]);
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={toggleMenuHandler}
          className="h-6 "
          src="./images/bars-solid.svg"
          alt="menu"
        />

        <img className="h-7 mx-7" src="./images/YouTube_Logo.svg" alt="logo" />
      </div>

      <div className="col-span-10 relative ">
        <div>
          <input
            className="border border-r-transparent border-gray-400 w-[51%]  p-2 px-5 rounded-l-full focus:outline-blue-900   "
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" border border-gray-400 bg-slate-100 py-2 px-5  rounded-r-full">
            <i class="fa-light fa-magnifying-glass fa-lg"></i>
          </button>
        </div>
        {showsuggestons && (
          <div className="absolute bg-white mt-1 py-2 mx-1 w-[34rem] shadow-lg rounded-md border border-gray-100">
            <ul>
              {suggestons.map((s) => (
                <li key={s} className="p-2 shadow-sm hover:bg-gray-100">
                  <i className="fa-light fa-magnifying-glass px-3"></i> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <img
          className="col-span-1 h-8"
          src="./images/user_icon.svg"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
