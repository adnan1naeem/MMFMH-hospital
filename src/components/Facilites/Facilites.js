import React from "react";
import "./Facilites.css";
import data from "./Facilites.json";

const Facilites = () => {
  return (
    <div className="Facilites-main">
      <h1 style={{ color: "white", fontWeight: "700" }}>
        OUR MEDICAL FACILITES
      </h1>
      <div className="FacilitesContainer">
        {data.map((item, index) => (
          <div className="Facilites" key={index}>
            <img src={item.image} alt="logo" />
            <p style={{ color: "white", fontWeight: "500" }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilites;
