import React from "react";
import "./ClickImage.css";

const ClickImage = props => (
  <div>
    <img alt={props.name} src={props.image} />
  </div>
);

export default ClickImage;