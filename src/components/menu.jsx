import React, { Component } from "react";
import { getMenuItems } from "./../services/fakeMenu";
import { withRouter } from "react-router-dom";
import "../styles/menu.sass";
import MenuItem from "./menuItem";
import Hamburger from "./hamburger";
import { MenuContext } from "./menuContext";

class Menu extends Component {
  state = { left: 0, width: 0, hovered: false, refresh: false };

  componentDidMount(e) {
    window.addEventListener("resize", () => {
      const { offsetLeft: left, clientWidth: width } = this.state.ref;
      this.setBg(left, width);
    });
  }

  componentDidUpdate(e) {
    if (this.context.webfont === true && this.state.refresh === false) {
      this.setState({ refresh: true });
      this.resetBg();
    }
  }
  getActive = item => {
    const re = new RegExp("^" + item.url);
    let { pathname } = this.props.location;
    if (pathname === "/") pathname = "/home";
    return re.test(pathname);
  };

  setBg = (left, width) => {
    this.setState({ left, width });
  };

  resetBg = () => {
    const { offsetLeft: left, clientWidth: width } = this.state.ref;
    this.setBg(left, width);
  };

  setRef = ref => {
    this.setState({ ref });
  };

  render() {
    const menuList = getMenuItems();
    const { width, left } = this.state;
    const style = { width, left };
    return (
      <nav className="col-8 col-t-1 col-s-3">
        <Hamburger />
        <ul className="menu">
          {menuList.map(i => (
            <MenuItem
              data={i}
              key={i._id}
              isActive={this.getActive}
              setBg={this.setBg}
              setRef={this.setRef}
              resetBg={this.resetBg}
            />
          ))}
          <div className="bg" style={style} />
        </ul>
      </nav>
    );
  }
}
Menu.contextType = MenuContext;
export default withRouter(Menu);
