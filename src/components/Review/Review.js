import React from "react";
import background from "../../Asset/04.png";
import "./Review.css";
const Review = (props) => {
  return (
    <div className="All-Review">
      <div className="image-container">
        <img src={background} alt="Background" />
        <div className="text-over">
          <p>{props.paragraph}</p>
        </div>
        <div className="image-over">
          <img src={props.patientImage}  alt="im"/>
        </div>
      </div>
    </div>
  );
};

export default Review;
