import React from "react";
import { Link } from "react-router-dom";
import { getTabInfo } from "../../services/fakePages";
import "../../styles/imageTabDesc.sass";

const ImageTabDesc = props => {
  const { id, endpoint } = props;
  const tab = getTabInfo(endpoint, id);
  return (
    <div className="info">
      <Link to="#">
        <h4>{tab.title}</h4>
      </Link>
      <div className="wrap">
        <span>{tab.desc}</span>
        <div className="link">
          <a href="#">Więcej...</a>
        </div>
      </div>
    </div>
  );
};

export default ImageTabDesc;
