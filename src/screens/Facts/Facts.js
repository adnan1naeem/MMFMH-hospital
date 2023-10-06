import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Facts.css";
import FactImage from "../../Asset/wetransfer_01-jpg_2023-09-22_1220/SAQ_6831.jpg";

const Facts = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <img
          style={{ width: "100%", marginTop: "1%" }}
          src={FactImage}
          alt="FactImage"
        />
        <div className="AboutFacts">
          <h2>Important Facts </h2>
          <p>
            It is estimated that each year around 350,000 patients get free of
            cost medical treatment from Mian Muhammad Fazal Memorial Hospital
            which includes free of cost supply of medicines as well. <br />
            Orient Electronics a part of Orient Group of Companies is a proud
            donor of all funds and MIT support to Mian Muhammad Fazal Memorial
            Hospital to continue supporting poor patients and serve the
            community timelessly.
          </p>
        </div>
        <div className="facts-numbers">
          <div
            style={{ display: "flex", flexDirection: "column", width: "40%" }}
          >
            <div className="facts-number-item">
              <h1>3.15 Million</h1>
              <p>Patients Treated</p>
            </div>
            <div className="others-all-number">
              <div className="facts-number-item">
                <h1>2</h1>
                <p>Emergency Units</p>
              </div>
              <div className="facts-number-item">
                <h1>43</h1>
                <p>Staff</p>
              </div>
              <div className="facts-number-item">
                <h1>21</h1>
                <p>Rooms</p>
              </div>

              <div className="facts-number-item">
                <h1>9</h1>
                <p>Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Facts;
