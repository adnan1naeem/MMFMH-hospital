import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import VolImage from "../../Asset/wetransfer_01-jpg_2023-09-22_1220/donate.jpg";
import Footer from "../../components/Footer/Footer";
const Donations = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <img className="visionimage" src={VolImage} alt="AboutImage" />
        <div className="VolunteersMMFH">
          <h2>How to Donate</h2>
          <p>
            If you're looking to make a difference in the lives of poor and
            needy patients, please also consider donating to Mian Muhammad Fazal
            Memorial Hospital. It accepts Zakat, Sadqaat, and Khairaat in the
            form of cash and goods. Your generosity can make a big impact on
            those who are in need.
          </p>
          <p>
            You can also participate in monthly Sadqa Program and can also
            sponsor an equipment.
          </p>
          <p>
            For more details please call directly at{" "}
            <strong style={{ color: "#993333" }}>042-35451891-2</strong>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donations;
