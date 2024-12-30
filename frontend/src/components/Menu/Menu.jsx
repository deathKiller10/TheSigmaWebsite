import React from 'react'
import { NavLink } from 'react-router'

export const Menu = ({isMenuOpen, toggleMenu}) => {
    return (
        <div>
            {/* Overlay */}
            {isMenuOpen && (
                <div
                className="fixed inset-0 bg-black bg-opacity-70"
                onClick={toggleMenu}
                ></div>
            )}
            {/* Menu Panel */}
            <div
                className={`fixed top-0 left-0 w-2/3 h-full bg-gray-800 text-white shadow-lg transform ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300`}
            >
                <button className="absolute top-4 right-4 text-xl" onClick={toggleMenu}>✖</button>
                <nav className="mt-16 space-y-2">
                    <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100 hover:text-black text-xl" onCLick={toggleMenu}>Home</NavLink>
                    <NavLink to="/products" className="block px-4 py-2 hover:bg-gray-100 hover:text-black text-xl" onCLick={toggleMenu}>Products</NavLink>
                    <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100 hover:text-black text-xl">Cart</NavLink>
                    <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100 hover:text-black text-xl">Contact Us</NavLink>
                </nav>
            </div>
        </div>
    )
}
