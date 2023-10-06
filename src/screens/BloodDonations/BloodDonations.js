import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import "./BloodDonations.css";
import joinUs from "../../Asset/wetransfer_01-jpg_2023-09-22_1220/SAQ_6921.jpg";
import Footer from "../../components/Footer/Footer";
import { FaLinkedin } from "react-icons/fa";
const BloodDonations = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <img className="visionimage" src={joinUs} alt="AboutImage" />
        <div className="DonationMMFH">
          <h2>Join Us </h2>
          <p>
            For the welfare of the needy and deserving patients you can join
            MMFM in the following programs and can play your role in this noble
            cause:
          </p>
        </div>
        <div className="DonationMMFH-N">
          <h2>Evening Clinics </h2>
          <p>
            MMFMH provides free of cost office spaces along with all facilities,
            utilities and hospital services absolutely free of cost to hold
            evening clinics. <br /> For more details visit us or contact admin
            department at 042-35451891-2.
          </p>
        </div>
        <div className="DonationMMFH-N">
          <h2>Blood Donation Program </h2>
          <p>
            Enroll in MMFMH blood donation program and become a blood donor to
            save lives of those in need. <br />
            For more details visit us or contact admin department at
            042-35451891-2.
          </p>
        </div>
        <div className="DonationMMFH-N">
          <h2>Volunteers</h2>
          <p>
            Make a significant difference by becoming a volunteer for MMFMH and
            promote its vision and also work at the hospital as Patient
            Facilitator. In addition you can also support MMFMH in raising
            awareness and helping raising funds as per hospital policy. <br />
            For more details visit us or contact admin department at
            042-35451891-2.
          </p>
        </div>
        <div className="DonationMMFH-N" style={{ marginBottom: "15%" }}>
          <h2>Careers</h2>
          <p>
            Follow us on Linkedin if you want to start your career with MMFMFH.
          </p>

          <a
            style={{ color: "black" }}
            href="https://www.linkedin.com/company/mian-muhammad-fazal-memorial-hospital/"
          >
            <FaLinkedin className="s-icon" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BloodDonations;
