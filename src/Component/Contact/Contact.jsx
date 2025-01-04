import React from "react";
import "./Contact.css";
import {
  FaPhoneVolume,
  FaEnvelopeOpenText,
  FaFacebook,
  FaInstagram,
  FaSquareXTwitter,
  FaYoutube
} from "react-icons/fa6";

function Contact() {
  return (
    <div className="contact_wrapper" id="contact">
      <div className="contact_container">
        <div className="contact_info">
          <h1>get in touch</h1>
          <p className="info_desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            libero ut dolor facilis quo tempore ex qui sapiente veniam, animi
            laboriosam consequuntur? Dolores quo, eum quibusdam quisquam
            aspernatur delectus quas.
          </p>
          <h4>
            123 main street <br></br> bankgkok, thailand.
          </h4>
          <p>
            <FaPhoneVolume />
            (+66) 98 555 1234
          </p>
          <p>
            <FaEnvelopeOpenText />
            <a href="#">adventure_camping@mail.com</a>
          </p>

          <div className="social">
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
          </div>
        </div>

        <div className="contact_form">
          <form action="">
            <div className="form_name">
              <div>
                <label htmlFor="first name">First Name</label>
                <input type="text" placeholder="e.g. John" />
              </div>

              <div>
                <label htmlFor="last name">Last Name</label>
                <input type="text" placeholder="e.g.Doe" />
              </div>
            </div>

            <label htmlFor="email">E-mail Adress</label>
            <input type="email" placeholder="e.g. adventure_camping@mail.com" />

            <label htmlFor="message">Your Message</label>
            <textarea placeholder="Type here" cols={30} rows={10}></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
