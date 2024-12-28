import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { PiSigmaBold } from "react-icons/pi";

export const Header = () => {
  return (
    <div className="h-[75px] bg-gray-900 text-white shadow-md sticky z-50 top-0">
      <div className="flex justify-between mx-4 justify-center items-center h-full">
        <RxHamburgerMenu size={24} className="hover:scale-[1.15] hover:cursor-pointer" />
        <PiSigmaBold size={24} className="hover:cursor-pointer"/>
        <ul className="flex gap-4">
            <li className="hover:scale-[1.15] hover:cursor-pointer"><IoSearch size={24}/></li>
            <li className="hover:scale-[1.15] hover:cursor-pointer"><FaCartShopping size={24}/></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
