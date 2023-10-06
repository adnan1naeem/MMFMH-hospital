import React from "react";
import Review from "../Review/Review";
import "./AllReview.css";
import patient1 from "../../Asset/Landing page/patient 1.jpeg";
import patient2 from "../../Asset/Landing page/patient 2.jpeg";
import What from "../../Asset/What patients say about us.png";
const AllReview = () => {
  return (
    <div className="AllReview">
      <img
        className="review-patient"
        style={{ marginTop: "1%" }}
        src={What}
        alt=""
      />
      {/* <h2 className="What">What</h2>
      <h2 className="Whatpat">Patients Say</h2>
      <h2 className="whatabo">About Us</h2> */}
      <div className="Review-component">
        <Review
          patientImage={patient1}
          paragraph="I was suffering from severe ulcer and was unable to get the cure even after trying numerous doctors. After consulting MMFMH, I got a comprehensive ulcer treatment with a lot of care from hospital’s specialized staff and finally I am recovering from this ulcer. I am thankful to MMFMH for the free of cost treatment and medication."
        />
        <Review
          patientImage={patient2}
          paragraph="I was suffering from viral eye infection and was very worried about it due to my financial condition, someone referred me to MMFMH as they provide free of cost treatment along with all the entailed medication. MMFMH has really supported me with my treatment and I am very thankful to their free eye clinic facility."
        />
      </div>
    </div>
  );
};

export default AllReview;
