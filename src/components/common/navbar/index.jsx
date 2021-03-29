import React, { useEffect, useRef, useState } from "react"
import "./index.scss"
import Logo from "../../../assets/images/logo-default-500x120.png"

const NavBar = () => {

  return (
    <div className="nav-bar">
      <div className={`nav`}>
        <div className=" flex items-center">
          <span>
            <img alt="trades.org logo" className="logo" src={Logo} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
