import React, { Component } from "react";
import { getTabInfo } from "../../services/fakePages";
import "../../styles/tab.sass";

class Tab extends Component {
  state = {};
  render() {
    const { id, endpoint } = this.props;
    const tab = getTabInfo(endpoint, id);
    let props, heading, children;
    if (tab !== null) {
      heading = <h5>{tab.title}</h5>;
      children = React.cloneElement(this.props.children, { endpoint, id });
    } else {
      children = this.props.children;
    }
    return (
      <section {...this.props} className={`${this.props.className || ""} tab`}>
        {heading}
        {children}
      </section>
    );
  }
}

export default Tab;
