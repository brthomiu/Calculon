import React from "react";
import { useState } from "react";
import "./styles.css";
import calculonIcon from "../assets/calculon.png";
import CalculatorButton from "./CalculatorButton.jsx";
import { evaluate, buttonArray } from "../actions/helpers";

const CalculatorBody = () => {
  //Create state objects and setter functions for displayed operands
  const [CurrentOperand, setCurrentOperand] = useState("");
  const [PreviousOperand, setPreviousOperand] = useState("");

  return (
    //Calculator Begins Here -------------------------------------------

    <div className="calcBody">
      {/* Calculator Header ------------------------ */}
      <div className="calcHeader">
        <h1>Calculon</h1>
        <img className="calculonIcon" src={calculonIcon} alt="calculon" />
      </div>

      {/* Calculator Display ------------------------ */}

      <div className="calcDisplay">
        <h1 className="previousOperand">{PreviousOperand}</h1>
      </div>
      <div className="calcDisplay">
        <h1>{CurrentOperand}</h1>
      </div>

      {/* Calculator Button Grid ------------------------ */}
      <div className="calcButtons">
        <div id="buttonGrid">
          {/* Maps aray of buttons, array imported from helpers */}
          {buttonArray.map((number) => (
            <CalculatorButton
              key={number}
              setCurrentOperand={setCurrentOperand}
              CurrentOperand={CurrentOperand}
              number={number}
              setPreviousOperand={setPreviousOperand}
            />
          ))}

          {/* Evaluate Button - Has a special class to make it wide */}
          <button
            className="calcButtonWide"
            onClick={() => {
              evaluate(CurrentOperand, setCurrentOperand, setPreviousOperand);
            }}
          >
            =
          </button>
        </div>
      </div>
      <h2>Made by Brad - 2022</h2>
    </div>
  );
};

export default CalculatorBody;
