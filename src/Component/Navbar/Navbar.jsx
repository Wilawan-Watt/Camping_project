import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Adventure_camping.png";
import { FaBars } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [isToggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggle);
  };

  const hadleCloseMenu = (e) => {
    if (e.target.tagName === "A") setToggle(false);
  };

  return (
    <nav>
      <div className="nav_wrapper">
        <div className="nav_contaianer">
          <HashLink to="#">
            <img src={Logo} alt="Adventure Logo" />
          </HashLink>
          <ul className="desktop_menu">
            <li>
              <HashLink to="#">home</HashLink>
            </li>
            <li>
              <HashLink to="#about">about</HashLink>
            </li>
            <li>
              <HashLink to="#activity">activity</HashLink>
            </li>
            <li>
              <HashLink to="#contact">contact</HashLink>
            </li>

            <button>
              <HashLink to="#booking">booking</HashLink>
            </button>
          </ul>
        </div>

        {/* Mobile responsive */}
        <FaBars className="bars" onClick={handleToggle} />
        {isToggle && (
          <>
            <ul className="mobile_menu" onClick={hadleCloseMenu}>
              <li>
                <HashLink to="#">home</HashLink>
              </li>
              <li>
                <HashLink to="#about">about</HashLink>
              </li>
              <li>
                <HashLink to="#activity">activity</HashLink>
              </li>
              <li>
                <HashLink to="#contact">contact</HashLink>
              </li>

              <button>
                <HashLink to="#booking">booking</HashLink>
              </button>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
