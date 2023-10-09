import React from "react";
import CountUp from "react-countup";
const CounterAnimation = ({ endValue }) => {
  return (
    <div className="facts-number-item">
      <CountUp start={0} end={endValue} duration={2.5} separator="," />
    </div>
  );
};

export default CounterAnimation;
