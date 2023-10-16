import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { LiaSearchSolid } from "react-icons/lia";
import { BiSun } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";
import { ThemeContext } from "../context/theme_context";
function Header() {
  const [toggle, setToggle] = useState(true);
  const {theme, setTheme} = useContext(ThemeContext);


  return (
    <div className="flex items-center p-3">
      <img src={logo} height={35} width={35} />
      <div className="flex mx-5 items-center bg-slate-200 dark:bg-red-500 w-full p-2 rounded-full">
        <LiaSearchSolid />
        <input
          type="text"
          className="bg-transparent outline-none ml-2 w-full"
          placeholder="Search games "
        />
      </div>
      <div>
        {theme == 'light' ? (
          <BsFillMoonFill onClick={() => {setTheme('dark'); localStorage.setItem('theme', 'dark')}} className="text-[35px] bg-slate-200 text-black rounded-full p-1" />
        ) : (
          <BiSun  onClick={() => {setTheme('light'); localStorage.setItem('theme', 'light')}} className="text-[35px] bg-slate-200 text-black rounded-full p-1" />
        )}
      </div>
    </div>
  );
}

export default Header;
