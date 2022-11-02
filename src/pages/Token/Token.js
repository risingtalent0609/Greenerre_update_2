import React, { useEffect } from "react";

//import Componnets
import Ecosystem from "../../components/Ecosystem/Ecosystem";
// import Roadmap from "../../components/Roadmap/Roadmap";
// import Faq from "../../components/Faq/Faq";
// import Help from "../../components/Help/Help";

const Token = () => {
  useEffect(() => {
    const offest = 100;
    //page margin because of navbar
    window.scrollTo({ top: 0 - offest, behavior: "smooth" });
  });

  return (
    <div className="mt-[100px]">
      <>
        <Ecosystem />
        {/* <Roadmap /> */}
        {/* <Faq /> */}
        {/* <Help /> */}
      </>
    </div>
  );
};

export default Token;
