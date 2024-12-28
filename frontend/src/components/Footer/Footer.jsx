import React from 'react'
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-gray-900 text-white h-[75px] flex justify-between items-center px-6">
        <p className="hover:underline">© 2024TheSigma</p>
        <a href="https://www.instagram.com/_the___sigma_/" className="transition-all duration-300 hover:scale-125"><FaInstagram size={23}/></a>
    </div>
  )
}

export default Footer