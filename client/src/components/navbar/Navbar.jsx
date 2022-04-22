import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo-nav.png";
import { Link } from "react-router-dom";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    window.scrollY <= 5 ? setIsScrolled(false) : setIsScrolled(true);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar notScrolled"}>
      <div className="container">
        <div className="left">
          <img src={Logo} alt="logo"></img>
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My Lists</span>
        </div>
        <div className="right">
          <Search className="Icon" />
          <span>KID</span>
          <Notifications className="Icon" />
          <img alt="" />
          <div className="profile">
            <ArrowDropDown className="Icon" />
            <div className="options">
              <span>Setting</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
