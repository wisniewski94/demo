import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/galleryPreview.sass";
import ToolTip from "./common/tooltip";
import { Scrollbars } from "react-custom-scrollbars";
class GalleryPreview extends Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <Scrollbars className="scrollbar">
          <div className={`${this.props.className || ""} wrapper`}>
            {data.map(i => (
              <article
                className="galleryItem"
                key={i._id}
                onMouseMove={this.handleMouseMove}
              >
                <Link to={i.endpoint || "#"}>
                  <img src={i.img.thumb} alt={i.title} />
                </Link>
                <ToolTip desc={i.title} />
              </article>
            ))}
          </div>
        </Scrollbars>
        <div className="all">
          <Link to={"#"}>Wszystkie realizacje...</Link>
        </div>
        <button className="ui blue">Wszystkie realizacje</button>
      </React.Fragment>
    );
  }
}

export default GalleryPreview;
