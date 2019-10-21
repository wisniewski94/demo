import React, { Component } from "react";
import { Picture } from "react-responsive-picture";
import { getImages, getImageInfo } from "../../services/fakePages";
import "../../styles/imageTab.sass";
import { Link } from "react-router-dom";
class ImageTab extends Component {
  state = {};

  render() {
    const { id, endpoint } = this.props;
    return (
      <div {...this.props} className={`${this.props.className} griditem tab`}>
        <Link to="#">
          <Picture
            alt={getImageInfo(endpoint, id)}
            sources={getImages(endpoint, id)}
          />
        </Link>
        {React.cloneElement(this.props.children, { id, endpoint })}
      </div>
    );
  }
}

export default ImageTab;
