import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../styles/hamburger.sass";

class Hamburger extends Component {
  state = { opened: false };

  componentDidMount() {
    window.addEventListener("resize", this.close);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ opened: false });
    }
  }

  close = () => {
    if (window.innerWidth > 992 && this.state.opened) {
      this.setState({ opened: false });
    }
  };
  handleClick = () => {
    this.setState(prevState => ({
      opened: !prevState.opened
    }));
  };
  render() {
    return (
      <div
        className={this.state.opened ? "hamburger open" : "hamburger"}
        onClick={this.handleClick}
        onKeyPress={this.handleClick}
        tabIndex="0"
      >
        <span />
        <span />
        <span />
      </div>
    );
  }
}

export default withRouter(Hamburger);
