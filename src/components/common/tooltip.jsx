import React from "react";
import "../../styles/tooltip.sass";

const ToolTip = props => {
  return <p className="tooltip">{props.desc}</p>;
};

export default ToolTip;
