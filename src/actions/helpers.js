// Helpers - This is where the bulk of the logic for the calculator lives.

//Function to parse the displayed value into proper syntax for evaluation
export const parseOperand = (operand) => {
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
export const countString = (str, letter) => {
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
export const findLastValue = (string) => {
  let lastValue = string[string.length - 1];
  return lastValue;
};

// Function to add character to the end of the operand
export const addCharacter = (setOperand, character) => {
  setOperand((CurrentOperand) => CurrentOperand + character);
};

// Function to insert "*" into the statement if there is no operator after the previous digit
export const implyMultiplication = (operand, setOperand, character) => {
  if (
    findLastValue(operand) === undefined ||
    findLastValue(operand) === "(" ||
    findLastValue(operand) === "π" ||
    findLastValue(operand) === "+" ||
    findLastValue(operand) === "-" ||
    findLastValue(operand) === "÷" ||
    findLastValue(operand) === "*"
  ) {
    setOperand((CurrentOperand) => operand + character);
  } else {
    setOperand((CurrentOperand) => operand + "*" + character);
  }
};

//Function to prevent placing an invalid operator at the start of the statement
export const requireOperand = (operand, setOperand, character) => {
  if (operand.length !== 0) {
    setOperand((CurrentOperand) => CurrentOperand + character);
  }
};

//Decimal point function
export const decimalPoint = (operand, setOperand) => {
  // Cannot be the first character in the Operand
  if (operand.length !== 0) {
    setOperand((CurrentOperand) => operand + ".");
  } else {
    setOperand((CurrentOperand) => operand + "0.");
  }
};

//Function to evaluate displayed statement
export const evaluate = (operand, setOperand, setPreviousOperand) => {
  let operation = parseOperand(operand);
  if (operation !== "") {
    // eslint-disable-next-line
    let answer = eval(operation); // Evaluatuates the expression
    let fixedAnswer = Number(answer.toFixed(6)); // Trims the result to 6 decimal places
    if (fixedAnswer === 0 || typeof fixedAnswer !== "number") {
      // Checks if result is a valid, non-zero number
      setPreviousOperand((CurrentOperand) => fixedAnswer.toString()); // If result is valid the current operand will be replaced with the result
      setOperand((CurrentOperand) => "");
    } else {
      setPreviousOperand((CurrentOperand) => fixedAnswer.toString()); // Previous operand will display the result regardless if it is valid
      setOperand((CurrentOperand) => fixedAnswer.toString());
    }
  }
};

//Array of buttons that is mapped to the calculator
export const buttonArray = [
  //Row 1
  "√(",
  "^",
  "π",
  "CE",
  "C",
  //Row 2
  7,
  8,
  9,
  "(",
  ")",
  //Row 3
  4,
  5,
  6,
  "÷",
  "-",
  //Row 4
  1,
  2,
  3,
  "*",
  "+",
  //Row 5
  0,
  ".",
  "←",
];
