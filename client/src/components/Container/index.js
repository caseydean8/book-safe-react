import React from "react";

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""} font`}>{props.children}</div>;
}

export default Container;