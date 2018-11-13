import React from "react";
import "./ClickImage.css";

const ClickImage = props => (
  <div className="row">
    <div className="col-12 col-sm-4 col-md-3">
      <img alt={props.name} src={props.image} onClick={() => props.clickedImg(props.id)} />
    </div>
  </div>
);

export default ClickImage;