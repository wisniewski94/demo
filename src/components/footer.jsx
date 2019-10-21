import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.sass";
import { getLowerFooter, getUpperFooter } from "./../services/fakeFooter";
import Logo from "./logo";
class Footer extends Component {
  render() {
    const upper = getUpperFooter();
    const lower = getLowerFooter();
    return (
      <footer>
        <div className="upper layout">
          <div className="wrapper">
            <Logo></Logo>
            {upper.map(({ title, links }) => (
              <nav key={title}>
                <h5>{title}</h5>
                <ul className="links">
                  {links.map(({ title, url }) => (
                    <li key={title}>
                      <Link to={url}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="lower">
          <div className="wrapper layout">
            <span>TISAN © 2019. Wszelkie prawa zastrzeżone.</span>
            {lower.map(({ title, url }) => (
              <div key={title} className="box">
                <Link to={url}>{title}</Link>
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
