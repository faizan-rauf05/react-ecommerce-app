import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

const AmoutToggle = ({ amount, setIncrement, setDecrement }) => {
  return (
    <>
      <button className="toggle-btns" onClick={setDecrement}>
        <FiMinus />
      </button>
      <h3>{amount}</h3>
      <button className="toggle-btns" onClick={setIncrement}>
        <MdOutlineAdd />
      </button>
    </>
  );
};

export default AmoutToggle;
