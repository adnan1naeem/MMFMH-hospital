import React from "react";
import Header from "../../components/Header/Header";
import Doctors from "../../components/Doctors/Doctors";
import NavBar from "../../components/NavBar/NavBar";
import "./AllDoctors.css";
import { data } from "./data";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-scroll";
const AllDoctors = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="AllDoctors-main">
        {data.map((items) => (
          <Doctors DoctorData={items} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default AllDoctors;
