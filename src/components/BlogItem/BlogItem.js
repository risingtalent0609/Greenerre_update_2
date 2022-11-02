import React from "react";

//import CSS
import "./BlogItem.scss";
const BlogItem = (props) => {
  return (
    <div className={`blog-item text-center px-4 py-5 ${props.position}`}>
      <div className="w-75 mx-auto">
        <img src={props.imgURL} width="100%" alt="blog item" />
        <h3 className="pt-4 text-start">{props.title}</h3>
        <p className="text-start">{props.content}</p>
      </div>
    </div>
  );
};

export default BlogItem;
