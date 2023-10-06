import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import "./FreeMedicine.css";
import Footer from "../../components/Footer/Footer";
import FreeMedicineImage from "../../Asset/wetransfer_01-jpg_2023-09-22_1220/SAQ_6955.jpg";

const FreeMedicine = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <img
          className="visionimage"
          src={FreeMedicineImage}
          alt="FreeMedicine"
        />
        <div className="FreeMMFH">
          <h2>Free Medicines</h2>
          <p>
            Access to affordable and quality healthcare is a fundamental human
            right. However, for millions of people around the world, the high
            cost of medicines remains a significant barrier to receiving
            necessary treatments. In the current time, getting free of cost
            medicine seems impossible. To address this pressing Issue and
            promote equitable healthcare, we have implemented free-of-cost
            medicine initiative and ensure that essential medications are
            accessible to everyone.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FreeMedicine;
