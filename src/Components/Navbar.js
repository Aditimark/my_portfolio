import React, { useState, useEffect } from "react"
import { HashLink as Link } from "react-router-hash-link"
//import { Link } from "react-router-dom"
import "./Navbar.css"
import Pdf from "../pdf/Resume.pdf"

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  window.addEventListener("resize", showButton)

  return (
    <>
      <nav className="navbar fixed-top ">
        <div className="navbar-container">
          <Link to="/#root" className="navbar-logo" onClick={closeMobileMenu}>
            <i class="fa-brands fa-atlassian" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/#root" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#certificates"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Certificates
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-links" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-links" onClick={closeMobileMenu}>
                About Me!
              </Link>
            </li>
            <li className="nav-btn">
              <a
                className="nav-links"
                onClick={closeMobileMenu}
                href={Pdf}
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
