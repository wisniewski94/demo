import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getTabInfo } from "../../services/fakePages";

class LinkList extends Component {
  state = {};
  render() {
    const { id, endpoint } = this.props;
    const tab = getTabInfo(endpoint, id);
    return (
      <ul className="links">
        {tab.links.map(i => (
          <li key={i.desc}>
            <Link to={i.endpoint}>{i.desc}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default LinkList;
