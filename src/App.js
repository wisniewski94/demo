import WebfontLoader from "@dr-kobros/react-webfont-loader";
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Heating from "./components/heating";
import HeatingTest from "./components/heatingTest";
import HeatingTest2 from "./components/heatingTest2";
import Homepage from "./components/homepage";
import { MenuContext } from "./components/menuContext";
import "./styles/App.sass";
import fonts from "./styles/fonts.sass";
import keyUI from "keyboard-ui";

class App extends Component {
  state = {
    webfont: false
  };

  callback = status => {
    if (status === "active" && this.state.webfont !== true) {
      this.setState({ webfont: true });
    }
  };

  render() {
    const config = {
      google: {
        families: ["Roboto:500"]
      },
      custom: {
        families: ["Reef", "Roboto Slab"],
        urls: fonts
      }
    };

    const { Provider } = MenuContext;
    return (
      <WebfontLoader config={config} onStatus={this.callback}>
        <Provider value={this.state}>
          <div id="content">
            <Header />
            <Switch>
              <Route path="/home" component={Homepage} />
              <Route path="/ogrzewanie" component={Heating} />
              <Route path="/ogrzewanie/test" component={HeatingTest} />
              <Route path="/ogrzewanie/test2" component={HeatingTest2} />
              <Route path="/kontakt" component={Contact} />
              <Redirect from="/" exact to="/home" />
            </Switch>
          </div>
          <Footer />
        </Provider>
      </WebfontLoader>
    );
  }
}
//https://stackoverflow.com/questions/53782249/react-calling-function-from-a-sibling-component
export default App;
