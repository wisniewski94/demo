import React from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ submenu, url }) => {
  return (
    <ul className="submenu">
      {submenu &&
        submenu.map(e => (
          <li className="sub" key={e.title}>
            <Link to={url + e.url}>{e.title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default SubMenu;
