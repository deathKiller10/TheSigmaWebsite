import React from 'react'
import { Outlet } from 'react-router'
import Header from './src/components/Header/Header'
import Footer from './src/components/Footer/Footer'

export const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}
