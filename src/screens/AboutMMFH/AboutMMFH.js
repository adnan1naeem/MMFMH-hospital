import React from "react";
import "./AboutMMFH.css";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import AboutImage from "../../Asset/wetransfer_01-jpg_2023-09-22_1220/SAQ_6831.jpg";
import "./AboutMMFH.css";

const AboutMMFH = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <img className="visionimage" src={AboutImage} alt="AboutImage" />
        <div className="AboutMMFH">
          <h2>Mian Muhammad Fazal Memorial Hospital </h2>
          <p>
            The MMFMH - Mian Muhammad Fazal Memorial Hospital is developed with
            the vision to provide free of cost quality healthcare facilities to
            the poor irrespective of cast, creed and religion. The hospital,
            under the supervision of best medical practitioners, is offering
            free of cost medicines, pathology and radiology lab tests for the
            diagnosis and treatment of the patients. Situated at 25km, Multan
            Road, Maraka Village in the outskirts of Lahore, the MMFMH is an
            eight (8) bed OPD hospital founded in 2014 and since its inception
            is being fully funded by Orient Electronics (Pvt.) Ltd. It is seen
            that the hospital has never fallen short of funds, resources and
            equipment since its inception in 2014.
          </p>
          <p>
            Despite being in a remote location MMFMH has specifically developed
            a consultant model for the better treatment of the patients which is
            particularly seen in other huge and expensive hospitals only. The
            record of each patient along with diagnostic history and
            prescription based free of cost medicines is also kept in hospital’s
            patient data base.{" "}
          </p>
          <p>
            At Mian Muhammad Fazal Memorial Hospital, very well esteemed and
            distinguished consultants across various medical disciplines are
            partnering with the hospital to provide best healthcare services to
            the poor and needy patients of the community.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMMFH;
