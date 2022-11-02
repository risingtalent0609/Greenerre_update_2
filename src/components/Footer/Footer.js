import React from "react";

//import CSS
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col bg-black text-white p-5 footer-item text-center md:text-left ">
      <div className="basis-1/2 mb-4">
        <h5 className="mb-3">GREENERRE</h5>
        <span>Sustainability made easy</span>
        <p>
          <b>Email:</b> &nbsp;
          <a href="/">fred@greenerre.sg</a>
        </p>
      </div>
      <div className="md:basis-1/4 basis-1/2 mb-4">
        <h5 className="mb-3">MENU</h5>
        <ul className="pl-0">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/service">Services</a>
          </li>
          <li>
            <a href="/greendao">GreenDAO</a>
          </li>
          <li>
            <a href="/project">Projects</a>
          </li>
          {/* <li>
            <a href="/outreach-education">Outreach &amp; Education</a>
          </li> */}
          <li>
            <a href="/advisor">Board of Advisors</a>
          </li>
        </ul>
      </div>
      <div className="md:basis-1/4 basis-1/2">
        <h5 className="mb-3">SOCIALS</h5>
        <ul className="pl-0 d-flex flex-row gap-3 md:items-start items-center justify-center">
          <li>
            <a href="/">
              <img src="/social/instagram.webp" alt="instagram" />{" "}
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/social/linkedin.webp" alt="linkedin" />
            </a>
          </li>
        </ul>
        <span> &copy; 2021 By Greenerre. </span> <br />
        <span>Designed By NA Developers</span>
      </div>
    </div>
  );
};

export default Footer;
