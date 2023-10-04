import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import VisionImage from "../../Asset/wetransfer_01-jpg_2023-09-22_1220/SAQ_6921.jpg";
import "./Vision.css";
const Vision = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <img className="visionimage" src={VisionImage} alt="AboutImage" />
        <div className="AboutVision">
          <h2>Our Vision</h2>
          <p>
            Mian Muhammad Fazal Memorial Hospital envisions to develop a network
            of quality healthcare facilities and serving, free of cost, under
            privileged communities without any discrimination of religion,
            region, gender and creed.
          </p>
          <h2>Our Mission</h2>
          <p>
            Bringing free of cost best healthcare services to poor which are
            available to privileged communities only by:
          </p>
          <ul>
            <li>
              Bringing on board country's best health practitioners as
              consultants to offer best diagnosis and healthcare services.
            </li>
            <li>
              Patient centric and sympathetic approach for the cure and care of
              the patients.
            </li>
            <li>
              Enhancing range of healthcare services with a special focus on
              mother& child care areas.
            </li>
            <li>
              Providing best diagnostic facilities by joining hands with leading
              labs in the country.
            </li>
            <li>
              Providing authentic, original and free of cost medicines by
              joining hands with medicine companies
            </li>
            <li>
              Adherence to best ethical and professional practices conforming to
              the laws of the country.
            </li>
            <li>
              Motivate affluent members of the community to help expand,
              replicate and develop network across region.
            </li>
          </ul>
          <h2>MMFMH Philosophy</h2>
          <p>
            The hospital never compromises on the quality of equipment. In order
            to treat any kind of disease and prioritize the wellbeing of
            patients, doctors are provided with the most technologically
            advanced equipment at par with any quality hospital out there.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vision;
