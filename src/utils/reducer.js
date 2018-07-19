export const reducer = getNumFn => getOpFn => opSwitchFn => string => {
  let numbers = getNumFn(string);
  let operators = getOpFn(string);

  let temp = [];

  do {
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "x" || operators[i] === "/") {
        temp.push(opSwitchFn(operators[i], numbers[i], numbers[i + 1]));
        numbers.splice(
          i,
          2,
          opSwitchFn(operators[i], numbers[i], numbers[i + 1])
        );
        operators.splice(i, 1);
      }
    }
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "+" || operators[i] === "-") {
        temp.push(opSwitchFn(operators[i], numbers[i], numbers[i + 1]));
        numbers.splice(
          i,
          2,
          opSwitchFn(operators[i], numbers[i], numbers[i + 1])
        );
        operators.splice(i, 1);
      }
    }
  } while (operators.length >= 1);

  return temp[temp.length - 1];
};
