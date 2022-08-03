import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

// CSS
import "normalize.css"
import "../assets/CSS/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
