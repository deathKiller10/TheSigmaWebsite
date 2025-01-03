import React from 'react'
import { Outlet } from 'react-router'
import Header from './src/components/Header/Header'
import Footer from './src/components/Footer/Footer'
import { useState } from 'react'
import { Menu } from './src/components/Menu/Menu'
import { createPortal } from 'react-dom'

export const Layout = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => {
            console.log("Clicked")
            return !prevState
        })
    }

  return (
    <>
        <Header toggleMenu={toggleMenu}/>
        {/* <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> */}
        {createPortal(<Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />, document.body)}
        <Outlet />
        <Footer />
    </>
  )
}
