import React from "react";
import "./ImportantFacts.css";

const ImportantFacts = () => {
  return (
    <div className="import-fact">
      <div className="overlay">
        <div className="main-overlay">
          <h1 className="importfacts">What Makes Us Special? </h1>
          <p
            className="estimated"
            style={{
              color: "#808080",
            }}
          >
            It is estimated that each year around 350,000 patients get free of
            cost medical treatment from Mian Muhammad Fazal Memorial Hospital
            which includes free of cost supply of medicines as well.
          </p>
        </div>
        <div className="home-numbers">
          <div className="home-number-item">
            <h1>3.15 Million</h1>
            <p>People Treated so Far</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginTop: "-8%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "15%",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <div className="home-number-item">
                <h1>9</h1>
                <p>Years of Service</p>
              </div>
              <div className="home-number-item">
                <h1>2</h1>
                <p>Emergency Units</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "15%",
                width: "100%",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              <div className="home-number-item">
                <h1>43</h1>
                <p>Staff</p>
              </div>
              <div className="home-number-item">
                <h1>21</h1>
                <p>Rooms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantFacts;
