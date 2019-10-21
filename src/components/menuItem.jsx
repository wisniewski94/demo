import React, { Component } from "react";
import SubMenu from "./subMenu";
import { Link } from "react-router-dom";

class MenuItem extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    const { data, isActive, setRef, setBg } = this.props;
    const { offsetLeft, clientWidth } = this.myRef.current;
    if (isActive(data)) {
      setBg(offsetLeft, clientWidth);
      setRef(this.myRef.current);
    }
    if (data._id !== this.state._id) {
      this.setState({ data });
    }
  }

  onSetActive = () => {
    const { setRef, setBg } = this.props;
    const { offsetLeft, clientWidth } = this.myRef.current;
    setBg(offsetLeft, clientWidth);
    setRef(this.myRef.current);
  };

  onSet = () => {
    const { setBg } = this.props;
    const { offsetLeft, clientWidth } = this.myRef.current;
    setBg(offsetLeft, clientWidth);
  };

  onReset = () => {
    this.props.resetBg();
  };

  render() {
    const { url, title, submenu } = this.props.data;
    return (
      <li
        className="menuitem"
        onMouseEnter={this.onSet}
        onMouseLeave={this.onReset}
        onFocus={this.onSet}
        onBlur={this.onReset}
        onClick={this.onSetActive}
        ref={this.myRef}
      >
        <Link to={url}>{title}</Link>
        {submenu && <SubMenu submenu={submenu} url={url} />}
      </li>
    );
  }
}

export default MenuItem;
