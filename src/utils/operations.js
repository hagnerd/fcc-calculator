import BigNumber from "bignumber.js";

export const add = (a, b) => {
  const A = new BigNumber(parseFloat(a));
  const B = new BigNumber(parseFloat(b));
  return A.plus(B).decimalPlaces(4);
};

export const subtract = (a, b) => {
  const A = new BigNumber(parseFloat(a));
  const B = new BigNumber(parseFloat(b));
  return A.minus(B).decimalPlaces(4);
};

export const multiply = (a, b) => {
  const A = new BigNumber(parseFloat(a));
  const B = new BigNumber(parseFloat(b));
  return A.multipliedBy(B).decimalPlaces(4);
};

export const divide = (a, b) => {
  const A = new BigNumber(parseFloat(a));
  const B = new BigNumber(parseFloat(b));
  return A.dividedBy(B).decimalPlaces(4);
};

export const opSwitch = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return;
  }
};
