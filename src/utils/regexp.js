export const getOperators = string => string.match(/([+\-/x])/g);

export const getNumbers = string => string.match(/(\d+\.?\d*)/g);

export const getDecimals = string => string.match(/(\.)/g);

const testForRegex = regex => string => regex.test(string);

export const testForNumber = testForRegex(/(\d+\.?\d*)/g);

export const testForOperators = testForRegex(/([+\-/x])/g);

export const isNumber = testForRegex(/\d+\.?\d*/);

export const isOperator = testForRegex(/[+\-x/]/);
