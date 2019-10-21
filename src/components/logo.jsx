import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/logo.sass";

class Logo extends Component {
  render() {
    return (
      <Link to="/" id="logo">
        TISAN
      </Link>
    );
  }
}

export default Logo;
