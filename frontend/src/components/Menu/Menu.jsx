import React from 'react'

export const Menu = ({isMenuOpen, toggleMenu}) => {
  return (
    <div>
        {/* Overlay */}
        {isMenuOpen && (
            <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleMenu}
            ></div>
        )}

        {/* Menu Panel */}
        <div
            className={`fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300`}
        >
            <button className="absolute top-4 right-4 text-xl" onClick={toggleMenu}>
            ✖
            </button>
            <nav className="mt-10 space-y-4">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Home</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Products</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cart</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact Us</a>
            </nav>
        </div>
    </div>
  )
}
