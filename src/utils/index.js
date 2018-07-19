import { add, subtract, divide, multiply, opSwitch } from "./operations";
import {
  getOperators,
  getNumbers,
  isOperator,
  testForOperators,
  testForNumber
} from "./regexp";
import { reducer } from "./reducer";

const getLastChar = string => string[string.length - 1];

export {
  add,
  subtract,
  divide,
  multiply,
  isOperator,
  getLastChar,
  getOperators,
  getNumbers,
  testForNumber,
  testForOperators,
  reducer,
  opSwitch
};
