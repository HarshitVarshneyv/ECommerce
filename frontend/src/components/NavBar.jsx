import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/Logo.png';
import profile from '../assets/profile_icon.png'

const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium bg-white">
      <img src={logo} alt="Logo" className="w-36" />

      <ul className="flex-1 flex justify-center gap-5 text-sm text-gray-700">
           
        <NavLink  className='flex flex-col items-center gap-1'>
         <p> Home</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
        <NavLink  className='flex flex-col items-center gap-1'>
         <p> Collection</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1'>
         <p> About</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1'>
         <p> Contact</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
      </ul>

    </div>
  );
};

export default NavBar;
