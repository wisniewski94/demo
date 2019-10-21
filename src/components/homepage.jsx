import React, { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import {
  getBreakpoints,
  getCols,
  getLayout,
  getRowHeight
} from "../services/fakePages";
import { getArticlesInfo } from "./../services/fakeArticles";
import { getGalleryItems } from "./../services/fakeGallery";
import Articles from "./articles";
import ImageTab from "./common/imageTab";
import ImageTabDesc from "./common/imageTabDesc";
import ImageTabHead from "./common/imageTabHead";
import LinkList from "./common/linkList";
import Tab from "./common/tab";
import ContactTab from "./contactTab";
import GalleryPreview from "./galleryPreview";
import MainTab from "./mainTab";
const ResponsiveGridLayout = WidthProvider(Responsive);

class Homepage extends Component {
  state = {
    margin: [16, 16],
    size: "",
    url: "home",
    cols: getCols("home"),
    breakpoints: getBreakpoints("home"),
    layouts: getLayout("home"),
    rowHeight: getRowHeight("home")
  };

  render() {
    const { layouts, cols, breakpoints, rowHeight, url } = this.state;
    let { margin } = this.state;
    const gridConfig = { layouts, cols, breakpoints, rowHeight, margin };
    return (
      <ResponsiveGridLayout
        className="layout"
        {...gridConfig}
        onBreakpointChange={(x, y) => {
          if (x === "sm") {
            margin = [8, 8];
          } else {
            margin = [16, 16];
          }
          this.setState(prevState => {
            if (prevState.margin !== margin) {
              return { margin };
            }
          });
        }}
      >
        <MainTab key="a" id="a" endpoint={url} />
        <ImageTab key="b" id="b" endpoint={url}>
          <ImageTabDesc />
        </ImageTab>
        <ImageTab key="c" id="c" endpoint={url}>
          <ImageTabDesc />
        </ImageTab>
        <ImageTab key="e" id="e" endpoint={url}>
          <ImageTabDesc />
        </ImageTab>
        <Tab key="d" id="d" className="sidetab griditem" endpoint={url}>
          <LinkList />
        </Tab>
        <Tab key="g" id="g" className="gallery griditem" endpoint={url}>
          <GalleryPreview data={getGalleryItems()} />
        </Tab>
        <Tab key="f" id="f" className="griditem" endpoint={url}>
          <ContactTab />
        </Tab>
        <Tab key="articles" className="griditem" id="articles" endpoint={url}>
          <Articles data={getArticlesInfo()} />
        </Tab>
        <ImageTab key="map" id="mapa" endpoint={url}>
          <ImageTabHead />
        </ImageTab>
      </ResponsiveGridLayout>
    );
  }
}

export default Homepage;
