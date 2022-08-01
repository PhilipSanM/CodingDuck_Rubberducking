import React from "react"
import Navbar from "./navar"
import Footer from "./Footer"

// CSS
import "./layout.css"

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
