import React from "react";
import { Link } from "react-router-dom";
//import CSS
import "./EcosystemItem.scss";
const EcosystemItem = (props) => {
  return (
    <div className="item-control">
      {props.type === "local" ? (
        <Link to={props.alink}>
          <img src={props.image} alt="item" className="my_pic" />
          <h4 className="text-center">{props.text}</h4>
        </Link>
      ) : (
        <a href={props.alink}>
          <img src={props.image} alt="item" className="my_pic" />
          <h4 className="text-center">{props.text}</h4>
        </a>
      )}
    </div>
  );
};

export default EcosystemItem;
