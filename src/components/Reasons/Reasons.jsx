import React from "react";
import "./Reasons.css";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

export const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>some reasi</span>
        <div>
          <span className="stroke-text">why</span>
          <span>choose us</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>over 140+ expert coachs</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>train master and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>free 1 program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>reliable partner</span>
          </div>
        </div>
        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          our partner
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};
