import React from "react";
import "../styles/styles.css";

const Button = ({ handleFilter }) => {
  return (
    <button className='btn custom-button' onClick={handleFilter}>
      Apply Filter
    </button>
  );
};

export default Button;
