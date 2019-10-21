import React, { Component } from "react";
import { Picture } from "react-responsive-picture";
import "../styles/mainTab.sass";
import { getImages, getImageInfo, getTabInfo } from "../services/fakePages";
class MainTab extends Component {
  state = {};
  render() {
    const { id, endpoint } = this.props;
    const tab = getTabInfo(endpoint, id);
    return (
      <main {...this.props} className={`${this.props.className} slider tab`}>
        <Picture
          alt={getImageInfo("home", "a")}
          sources={getImages("home", "a")}
        />
        <div className="wrapper">
          <h2>{tab.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: tab.desc }} />
          <div className="container">
            <button className="ui transparent">Oferta</button>
            <button className="ui blue">Kontakt</button>
          </div>
        </div>
        {this.props.children}
      </main>
    );
  }
}

export default MainTab;
