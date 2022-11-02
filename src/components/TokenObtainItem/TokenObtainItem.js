import React from "react";

const TokenObtainItem = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-center p-2 h-[100px] font-bold text-white bg-green-800 rounded drop-shadow-md">
      {props.text}
    </div>
  );
};

export default TokenObtainItem;
