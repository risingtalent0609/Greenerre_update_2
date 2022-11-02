import React from "react";

import "./CStatistics.scss";
const CStatistics = () => {
  return (
    <div className="my-5 text-center">
      <h3>Statistics</h3>
      <div className="cstatistics-control d-flex align-items-center justify-content-center flex-row flex-wrap">
        <div className="statistics-item m-1 p-1">
          <img src="/hp.png" alt="hp" />
          <span>HP</span>
        </div>
        <div className="statistics-item m-1 p-1">
          <img src="/attack.png" alt="attack" />
          <span>ATTACK</span>
        </div>
        <div className="statistics-item m-1 p-1">
          <img src="/defence.png" alt="defence" />
          <span>DEFENCE</span>
        </div>
        <div className="statistics-item m-1 p-1">
          <img src="/speed.png" alt="speed" />
          <span>SPEED</span>
        </div>
        <div className="statistics-item m-1 p-1">
          <img src="/fatigue.png" alt="fatigue" />
          <span>FATIGUE</span>
        </div>
        <div className="statistics-item m-1 p-1">
          <img src="/charm.png" alt="charm" />
          <span>CHARM</span>
        </div>
      </div>
    </div>
  );
};

export default CStatistics;
