import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
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

      <div className="col-span-10 ">
        <input
          className="border border-r-transparent border-gray-400 w-1/3  ml-56 p-2 px-5 rounded-l-full   "
          type="text"
        />
        <button className=" border border-gray-400 bg-slate-100 p-2 rounded-r-full">
          Search
        </button>
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
