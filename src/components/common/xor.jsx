import React, { Component } from "react";
import Form from "./form";
import ContactForm from "./../contactForm";

class XOR extends Form {
  state = { first: false, second: false };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.config = this.props.config;
  }

  handleMouseOver = detail => {
    if (detail === 1) this.setState({ first: true, second: false });
    if (detail === 0) this.setState({ first: false, second: true });
  };

  handleChange(event) {
    const { name, value } = event.currentTarget;
    super.handleChange(name, value);
    console.log(value);
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        {React.cloneElement(children[0], {
          onMouseOver: () => this.handleMouseOver(0),
          onChange: this.handleChange,
          className: this.state.first ? "disabled" : ""
        })}
        {React.cloneElement(children[1], {
          onMouseOver: () => this.handleMouseOver(1),
          onChange: this.handleChange,
          className: this.state.second ? "disabled" : ""
        })}
      </React.Fragment>
    );
  }
}

export default XOR;
