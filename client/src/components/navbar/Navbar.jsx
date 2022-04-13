import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo-nav.png";

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
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
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
