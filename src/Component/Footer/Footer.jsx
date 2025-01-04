import React from "react";
import "./Footer.css";
import { GiMountaintop } from "react-icons/gi";
import Logo from "../../assets/Adventure_logo.png";
import { GiCampfire } from "react-icons/gi";
import {
  FaPhoneVolume,
  FaEnvelopeOpenText,
  FaFacebook,
  FaInstagram,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer_wrapper">
      <div className="footer_container">
        <div className="footer_top">
          <img src={Logo} alt="" />

          <div className="top_link">
            <ul className="link1">
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">activity</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>

            <ul className="link2">
              <li>
                <a href="#">booking</a>
              </li>
              <li>
                <a href="#">gallery</a>
              </li>
              <GiCampfire />
            </ul>

            <ul className="social">
              <h3>social media</h3>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaSquareXTwitter />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </ul>
          </div>
        </div>

        <div className="footer_end">
          <GiMountaintop />
          <div className="footer_info">
            <h3>advanture camping</h3>
            <h4>123 main street bangkok, thailand</h4>
            <p>Copyright © 2024. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
