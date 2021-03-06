import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="desctiption">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>teamwork</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>diaphragm</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </div>
        </div>
      </div>
      <img src={home2} alt="icon" />
    </div>
  );
};
export default ServicesSection;
