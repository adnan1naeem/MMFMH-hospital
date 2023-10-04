import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import "./CEOMessage.css";
import Footer from "../../components/Footer/Footer";
const CEOMessage = () => {
  return (
    <div>
      <div>
        <Header />
        <NavBar />
        <div className="AboutMMFH">
          {/* <div>
            <h2>Doctor Ayesha</h2>
          </div> */}
          <div>
            <h2 style={{ marginTop: "1%" }}>Dr. Ayesha Ahmad</h2>
            <p>CEO MMFMH</p>
          </div>

          <p>
            Since our humble beginnings, we have remained steadfast in our
            mission to provide compassionate care and medical excellence to the
            underserved communities. Our dedication to this cause has enabled us
            to touch countless lives, offering hope, healing, and a brighter
            future.
          </p>
          <p>
            Looking ahead, we envision an even brighter future for our hospital.
            With your continued support, we plan to expand our reach, invest in
            cutting-edge medical technology, and enhance our programs to address
            the evolving healthcare needs of the communities we serve.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CEOMessage;
