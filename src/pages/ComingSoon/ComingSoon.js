import React, { useEffect, useState } from "react";

import "./ComingSoon.scss";
const ComingSoonPage = () => {
  const [countDownEndDate, setCountDownEndDate] = useState("");

  const [ldays, setLdays] = useState("");
  const [lhours, setLhours] = useState("");
  const [lminutes, setLminutes] = useState("");
  const [lseconds, setLseconds] = useState("");
  useEffect(() => {
    setCountDownEndDate("October 10, 2022 09:00:00");
  }, []);
  useEffect(() => {
    let endDate = new Date(countDownEndDate).getTime();

    setInterval(() => {
      let timeNow = new Date().getTime();
      let timeLeft = endDate - timeNow;

      let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      if (days < 10) {
        days = "0" + days;
      }

      if (hours < 10) {
        hours = "0" + hours;
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      if (timeLeft > 0) {
        setLdays(days);
        setLhours(hours);
        setLminutes(minutes);
        setLseconds(seconds);
      }
    });
  }, [countDownEndDate]);
  return (
    <>
      <header
        className="w-full h-screen bg-cover bg-bottom pt-[100px]"
        style={{
          background: `url('${process.env.PUBLIC_URL}/leaves.jpg')`,
        }}
      >
        <div className="h-full">
          <div className="flex h-full">
            <div className="w-full md:w-1/2 bg-gradient-to-b from-gray-900/90 to-gray-900/95 p-10 flex">
              <div className="w-full text-center my-auto">
                <h1 className="font-bold text-5xl font-Comforter-Brush text-amber-500 my-10 md:text-right">
                  Greenerre
                </h1>
                <h6 className="font-Montserrat font-bold uppercase text-4xl md:text-5xl lg:text-6xl mb-14 md:-mr-20 text-white md:text-right">
                  Coming <span className="text-white/70 md:-mr-20">soon</span>
                </h6>

                <div className="w-full text-left flex mb-10">
                  <ul className="w-full flex place-content-center md:place-content-end gap-5 mx-auto text-gray-50">
                    <li>
                      <div
                        className="font-bold text-white rounded-full border-dotted border-gray-700 border-4 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24"
                        id="cdD"
                      >
                        {ldays}
                      </div>
                      <p className="text-center text-xs mt-2">Days</p>
                    </li>

                    <li>
                      <div
                        className="font-bold text-white rounded-full border-dotted border-gray-700 border-4 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24"
                        id="cdH"
                      >
                        {lhours}
                      </div>
                      <p className="text-center text-xs mt-2">Hours</p>
                    </li>

                    <li>
                      <div
                        className="font-bold text-white rounded-full border-dotted border-gray-700 border-4 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24"
                        id="cdM"
                      >
                        {lminutes}
                      </div>
                      <p className="text-center text-xs mt-2">Minutes</p>
                    </li>

                    <li>
                      <div
                        className="font-bold text-white rounded-full border-dotted border-gray-700 border-4 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24"
                        id="cdS"
                      >
                        {lseconds}
                      </div>
                      <p className="text-center text-xs mt-2">Seconds</p>
                    </li>
                  </ul>
                </div>

                <div className="w-full text-left flex mb-5">
                  <ul className="w-full flex place-content-center md:place-content-end gap-10 mx-auto text-gray-500">
                    <li>
                      <a href="/" className="text-lg hover:text-amber-500">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>

                    <li>
                      <a href="/" className="text-lg hover:text-amber-500">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a href="/" className="text-lg hover:text-amber-500">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>

                    <li>
                      <a href="/" className="text-lg hover:text-amber-500">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-0 md:w-5/12 lg:w-1/2"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default ComingSoonPage;
