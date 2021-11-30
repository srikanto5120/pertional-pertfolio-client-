import React from "react";

import { Bounce, Fade } from "react-reveal";

import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="banner p-5"
      style={{ fontFamily: " Roboto Condensed', sans-serif" }}
    >
      <div className="mx-auto w-50">
        <Bounce left cascade>
          <h1 className="py-5">HI, I'M A </h1>
        </Bounce>

        <Fade bottom cascade>
          <h1 className="pb-3 fw-bolder">DEVELOPER</h1>
        </Fade>
        <Bounce left cascade>
          <h4> Thakurgoan Bangladesh </h4>
          <br />
          <a
            href="https://drive.google.com/file/d/1wLS3knfoSB47SLueMUIurQnPhFcz1ui3/view?usp=sharing"
            target="_blank"
          >
            <button className="btn bg-primary text-white">
              {" "}
              Download Resume
            </button>{" "}
          </a>
        </Bounce>
      </div>
    </div>
  );
};

export default Banner;
