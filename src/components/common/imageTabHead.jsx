import React from "react";
import { getTabInfo } from "../../services/fakePages";
import "../../styles/imageTabHead.sass";
const ImageTabHead = props => {
  const { id, endpoint } = props;
  const tab = getTabInfo(endpoint, id);
  return (
    <div className="head wrapper">
      <h2>{tab.title}</h2>
      <span>{tab.desc}</span>
    </div>
  );
};

export default ImageTabHead;
