import React from "react";
import {
  findLastValue,
  decimalPoint,
  requireOperand,
  implyMultiplication,
  addCharacter,
} from "../actions/helpers";

const CalculatorButton = (props) => {
  return (
    <button
      onClick={() => {
        // Big ol switch statement to handle logic for different buttons
        switch (props.number) {
          case ".":
            decimalPoint(props.CurrentOperand, props.setCurrentOperand);
            break;

          //Cases to prevent starting the statement with an invalid operator
          case "^":
          case ")":
          case "÷":
          case "*":
          case "+":
            requireOperand(
              props.CurrentOperand,
              props.setCurrentOperand,
              props.number
            );
            break;

          //Cases to add a multiplication operator before statements if they are not preceded by another operator
          case "√(":
          case "π":
          case "(":
            implyMultiplication(
              props.CurrentOperand,
              props.setCurrentOperand,
              props.number
            );
            break;

          //Case for the C button
          case "C":
            props.setCurrentOperand((CurrentOperand) => "");
            props.setPreviousOperand((PreviousOperand) => "");
            break;

          //Case for the CE button
          case "CE":
            props.setCurrentOperand((CurrentOperand) => "");
            break;

          //Case for the ← button
          case "←":
            if (props.CurrentOperand !== "") {
              props.setCurrentOperand((CurrentOperand) =>
                props.CurrentOperand.slice(0, -1)
              );
            }
            break;

          //Case for the - button
          case "-":
            addCharacter(props.setCurrentOperand, "-");
            break;

          //Default case for all numbers
          default:
            //Contains an else if statement to insert a multiplication symbol if the previous character is a number
            //And prevents the user from beginning the statement with a zero
            if (
              findLastValue(props.CurrentOperand) === ")" ||
              findLastValue(props.CurrentOperand) === "π"
            ) {
              props.setCurrentOperand(
                (CurrentOperand) => props.CurrentOperand + "*" + props.number
              );
            } else if (
              props.CurrentOperand.length === 0 &&
              props.number === 0
            ) {
              break;
            } else {
              props.setCurrentOperand(
                (CurrentOperand) => props.CurrentOperand + props.number
              );
            }
        }
      }}
    >
      {props.number}
    </button>
  );
};

export default CalculatorButton;
