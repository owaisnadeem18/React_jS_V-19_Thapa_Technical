import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import "../../App.css";

const Header = () => {
  const changeBg = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "purple" : "red",
    };
  };

  return (
    <header className="section-navbar">
      <section className="top_txt">
        <div className="head container">
          <div className="head_txt">
            <p>Get Thapa Membership, 30-day return or refund guarantee.</p>
          </div>
          <div className="sing_in_up">
            <NavLink to="#">SIGN IN</NavLink>
            <NavLink to="#">SIGN UP</NavLink>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="navbar-brand">
          <NavLink to="#">
            <p>ThapaFlix</p>
          </NavLink>
        </div>

        <nav className="navbar">
          <ul>
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" style={changeBg}>
                {" "}
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                // style={({ isActive }) => {
                //   return {
                //     color: isActive ? "red" : "pink",
                //   };
                // }}
              >
                contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
