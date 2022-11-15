import React from "react";
import { useState } from "react";
import "./styles.css";
import calculonIcon from "../assets/calculon.png";

const CalculatorBody = () => {
  //Create state objects and setter functions for displayed operands
  const [CurrentOperand, setCurrentOperand] = useState("");
  const [PreviousOperand, setPreviousOperand] = useState("");

  //Function to parse the displayed value into proper syntax for evaluation
  const parseOperand = (operand) => {
    const stringOperand = operand.toString();
    let parsedOperand = "";
    for (let i = 0; i < stringOperand.length; i++) {
      if (stringOperand[i] === "√") {
        parsedOperand += `Math.sqrt`;
      } else if (stringOperand[i] === "^") {
        parsedOperand += "**";
      } else if (stringOperand[i] === "π") {
        parsedOperand += "(3.141592)";
      } else if (stringOperand[i] === "÷") {
        parsedOperand += "/";
      } else {
        parsedOperand += stringOperand[i];
      }
    }
    return parsedOperand;
  };

  //Function to count occurences of a character in a string
  const countString = (str, letter) => {
    let count = 0;
    // looping through the items
    for (let i = 0; i < str.length; i++) {
      // check if the character is at that position
      if (str.charAt(i) === letter) {
        count += 1;
      }
    }
    return count;
  };

  //Function to check last value of a string
  const findLastValue = (string) => {
    let lastValue = string[string.length - 1];
    console.log(lastValue);
    return lastValue;
  };

  return (
    //Calculator Begins Here -------------------------------------------

    <div className="calcBody">
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

      <div id="buttonGrid">
        {/* Row 1 -------------------- */}

        <button
          className="calcButton"
          onClick={() => {
            if (
              // Inserts * if there is no operator after the previous digit
              findLastValue(CurrentOperand) === undefined ||
              findLastValue(CurrentOperand) === "(" ||
              findLastValue(CurrentOperand) === "π" ||
              findLastValue(CurrentOperand) === "+" ||
              findLastValue(CurrentOperand) === "-" ||
              findLastValue(CurrentOperand) === "÷" ||
              findLastValue(CurrentOperand) === "*"
            ) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "√(");
            } else {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "*√(");
            }
          }}
        >
          √
        </button>

        <button
          className="calcButton"
          onClick={() => {
            // Cannot be the first character in the Operand
            if (CurrentOperand.length !== 0) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "^");
            }
          }}
        >
          ^
        </button>

        <button
          className="calcButton"
          onClick={() => {
            if (
              // Inserts * if there is no operator after the previous digit
              findLastValue(CurrentOperand) === undefined ||
              findLastValue(CurrentOperand) === "(" ||
              findLastValue(CurrentOperand) === "^" ||
              findLastValue(CurrentOperand) === "π" ||
              findLastValue(CurrentOperand) === "+" ||
              findLastValue(CurrentOperand) === "-" ||
              findLastValue(CurrentOperand) === "÷" ||
              findLastValue(CurrentOperand) === "*"
            ) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "π");
            } else {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "*π");
            }
          }}
        >
          π
        </button>

        <button
          className="calcButton"
          onClick={() => {
            if (CurrentOperand !== "") {
              setCurrentOperand((CurrentOperand) => "");
            }
          }}
        >
          CE
        </button>

        <button
          className="calcButton"
          onClick={() => {
            setCurrentOperand((CurrentOperand) => "");
            setPreviousOperand((PreviousOperand) => "");
          }}
        >
          C
        </button>

        {/* Row 2 -------------------- */}

        <button
          className="calcButton"
          onClick={() => {
            if (
              // Inserts * if there is no operator
              findLastValue(CurrentOperand) === ")" ||
              findLastValue(CurrentOperand) === "π"
            ) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "*7");
            } else {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "7");
            }
          }}
        >
          7
        </button>

        <button
          className="calcButton"
          onClick={() => {
            if (
              // Inserts * if there is no operator
              findLastValue(CurrentOperand) === ")" ||
              findLastValue(CurrentOperand) === "π"
            ) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "*8");
            } else {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "8");
            }
          }}
        >
          8
        </button>

        <button
          className="calcButton"
          onClick={() => {
            if (
              // Inserts * if there is no operator
              findLastValue(CurrentOperand) === ")" ||
              findLastValue(CurrentOperand) === "π"
            ) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "*9");
            } else {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "9");
            }
          }}
        >
          9
        </button>

        <button
          className="calcButton"
          onClick={() => {
            // Prevents placing an open parentheses after a digit without an operator
            if (
              // Inserts * if there is no operator
              findLastValue(CurrentOperand) === undefined ||
              findLastValue(CurrentOperand) === "(" ||
              findLastValue(CurrentOperand) === "π" ||
              findLastValue(CurrentOperand) === "+" ||
              findLastValue(CurrentOperand) === "-" ||
              findLastValue(CurrentOperand) === "÷" ||
              findLastValue(CurrentOperand) === "*"
            ) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "(");
            } else {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "*(");
            }
          }}
        >
          (
        </button>

        <button
          className="calcButton"
          onClick={() => {
            if (countString(CurrentOperand, "(") !== 0) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + ")");
            }
          }}
        >
          )
        </button>

        {/* Row 3 -------------------- */}

        <button
          className="calcButton"
          onClick={() => {
            if (
              // Inserts * if there is no operator
              findLastValue(CurrentOperand) === ")" ||
              findLastValue(CurrentOperand) === "π"
            ) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "*4");
            } else {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "4");
            }
          }}
        >
          4
        </button>

        <button
          className="calcButton"
          onClick={() => {
            if (
              // Inserts * if there is no operator
              findLastValue(CurrentOperand) === ")" ||
              findLastValue(CurrentOperand) === "π"
            ) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "*5");
            } else {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "5");
            }
          }}
        >
          5
        </button>

        <button
          className="calcButton"
          onClick={() => {
            if (
              // Inserts * if there is no operator
              findLastValue(CurrentOperand) === ")" ||
              findLastValue(CurrentOperand) === "π"
            ) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "*6");
            } else {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "6");
            }
          }}
        >
          6
        </button>

        <button
          className="calcButton"
          onClick={() => {
            // Cannot be the first character in the Operand
            if (CurrentOperand.length !== 0) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "÷");
            }
          }}
        >
          ÷
        </button>

        <button
          className="calcButton"
          onClick={() =>
            setCurrentOperand((CurrentOperand) => CurrentOperand + "-")
          }
        >
          -
        </button>

        {/* Row 4 -------------------- */}

        <button
          className="calcButton"
          onClick={() => {
            if (
              // Inserts * if there is no operator
              findLastValue(CurrentOperand) === ")" ||
              findLastValue(CurrentOperand) === "π"
            ) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "*1");
            } else {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "1");
            }
          }}
        >
          1
        </button>

        <button
          className="calcButton"
          onClick={() => {
            if (
              // Inserts * if there is no operator
              findLastValue(CurrentOperand) === ")" ||
              findLastValue(CurrentOperand) === "π"
            ) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "*2");
            } else {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "2");
            }
          }}
        >
          2
        </button>

        <button
          className="calcButton"
          onClick={() => {
            if (
              // Inserts * if there is no operator
              findLastValue(CurrentOperand) === ")" ||
              findLastValue(CurrentOperand) === "π"
            ) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "*3");
            } else {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "3");
            }
          }}
        >
          3
        </button>

        <button
          className="calcButton"
          onClick={() => {
            // Cannot be the first character in the Operand
            if (CurrentOperand.length !== 0) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "*");
            }
          }}
        >
          *
        </button>

        <button
          className="calcButton"
          onClick={() => {
            // Cannot be the first character in the Operand
            if (CurrentOperand.length !== 0) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "+");
            }
          }}
        >
          +
        </button>

        {/* Row 5 -------------------- */}

        <button
          className="calcButton"
          onClick={() => {
            if (
              // Prevents leading 0s
              findLastValue(CurrentOperand) !== undefined
            )
              setCurrentOperand((CurrentOperand) => CurrentOperand + 0);
          }}
        >
          0
        </button>

        <button
          className="calcButton"
          onClick={() => {
            // Cannot be the first character in the Operand
            if (CurrentOperand.length !== 0) {
              setCurrentOperand((CurrentOperand) => CurrentOperand + ".");
            } else {
              setCurrentOperand((CurrentOperand) => CurrentOperand + "0.");
            }
          }}
        >
          .
        </button>

        <button
          className="calcButton"
          onClick={() => {
            if (CurrentOperand !== "") {
              setCurrentOperand((CurrentOperand) =>
                CurrentOperand.slice(0, -1)
              );
            }
          }}
        >
          DEL
        </button>

        <button
          className="calcButtonWide"
          onClick={() => {
            let operation = parseOperand(CurrentOperand);
            console.log(operation);
            if (operation !== "") {
              // eslint-disable-next-line
              let answer = eval(operation); // Evaluatuates the expression
              let fixedAnswer = Number(answer.toFixed(6)); // Trims the result to 6 decimal places
              if (fixedAnswer === 0 || typeof fixedAnswer !== "number") {
                // Checks if result is a valid, non-zero number
                console.log(typeof fixedAnswer);
                setPreviousOperand((CurrentOperand) => fixedAnswer.toString()); // If result is valid the current operand will be replaced with the result
                setCurrentOperand((CurrentOperand) => "");
              } else {
                console.log(typeof fixedAnswer);
                setPreviousOperand((CurrentOperand) => fixedAnswer.toString()); // Previous operand will display the result regardless if it is valid
                setCurrentOperand((CurrentOperand) => fixedAnswer.toString());
              }
            }
          }}
        >
          =
        </button>
      </div>
      <h2>Made by Brad - 2022</h2>
    </div>
  );
};

export default CalculatorBody;
