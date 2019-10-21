import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import Menu from "./menu";
import "../styles/header.sass";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div id="main" className="col-4 col-t-11 col-s-9">
          <Logo />
          <div className="wrapper">
            <Link to="#" id="email">
              tisan@tisan.com.pl
            </Link>
            <br />
            <Link to="#" id="phone">
              +48 602 622 115
            </Link>
          </div>
        </div>
        <Menu />
      </header>
    );
  }
}

export default Header;
