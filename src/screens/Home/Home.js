import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import doctor from "../../Asset/doctor.png";
import Swiper from "../../components/Swiper/Swiper";
import banner from "../../Asset/osr.png";
import SliderDoctor from "../../components/OurDoctorSwiper/OurDoctorSwiper";
import donate from "../../Asset/WhatsApp Image 2023-09-14 at 7.43.19 PM.jpg";
import Footer from "../../components/Footer/Footer";
import ImportantFacts from "../../components/ImportantFacts/ImportantFacts";
import { Link } from "react-router-dom";
import AllReview from "../../components/AllReview/AllReview";
import BannerHomeImage from "./BannerHomeImage";
const Home = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <Swiper />
      </div>
      <div className="Home-Hospital">
        {window.innerWidth >= 768 && (
          <img
            className="Doctor"
            style={{ width: "28%" }}
            src={doctor}
            alt="doctor"
          />
        )}

        <div className="Home-intro">
          <h2
            style={{ color: "#993333", marginBottom: "6%", fontWeight: "700" }}
          >
            Mian Muhammad Fazal Memorial Hospital
          </h2>
          <p style={{ color: "grey" }}>
            Please change text to below given text: The MMFMH - Mian Muhammad
            Fazal Memorial Hospital is developed with the vision to provide free
            of cost quality healthcare facilities to the poor irrespective of
            cast, creed and religion. The hospital, under the supervision of
            best medical practitioners, is offering its patients free of cost
            medical assistance and medicines whereas pathology and radiology lab
            tests are performed at a very nominal charges.
          </p>
        </div>
      </div>
      <Link to="/OurServices&Clinics" style={{textDecoration:'none'}}>
      <BannerHomeImage/>
      </Link>
    
      {/* <Link
        className="image-container"
        to="/OurServices&Clinics"
        style={{ textDecoration: "none" }}
      >
        <img  src={banner} alt="banner" className="centered-image" />
      </Link> */}
      <div style={{ marginTop: "-4%" }} className="Dr-slider">
        <SliderDoctor />
      </div>
      <div style={{ marginTop: "1%" }} className="impo">
        <ImportantFacts />
      </div>
      <AllReview />
      <div style={{ marginTop: "1%" }}>
        <Link to="/Donation">
          {" "}
          <img className="donate" style={{ width: "100%" }} src={donate}  alt=""/>
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
