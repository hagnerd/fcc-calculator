import React from "react";
import {
  getLastChar,
  getNumbers,
  getOperators,
  isOperator,
  reducer,
  opSwitch
} from "../utils";

const calcReducer = reducer(getNumbers)(getOperators)(opSwitch);

export default class Calculator extends React.Component {
  state = {
    displayText: "0",
    error: null
  };

  handleClick = ({ text, type }) => {
    const { displayText } = this.state;
    if (
      type === "decimal" &&
      getNumbers(displayText)
        .pop()
        .includes(".")
    ) {
      this.setState({
        error: "Cannot have two decimals in a single number."
      });
      return;
    }

    if (type === "operator" && displayText === "0") {
      return;
    }

    if (type === "operator" && isOperator(getLastChar(displayText))) {
      this.setState({
        error: "Cannot have two operators in a row"
      });
      return;
    }

    this.setState(({ displayText }) => ({
      displayText: displayText === "0" ? text : `${displayText}${text}`,
      error: null
    }));
  };

  handleReset = () => this.setState({ displayText: "0" });

  handleCalculate = number => {
    if (number === "0") {
      this.setState({
        error: "No calculation available."
      });
      return;
    }
    if (isOperator(getLastChar(number))) {
      this.setState({
        error: "Cannot end in an operator."
      });
      return;
    }

    this.setState({
      displayText: calcReducer(number).toString(),
      error: null
    });
  };

  render() {
    const { error, displayText } = this.state;
    const { handleClick, handleReset, handleCalculate } = this;
    return this.props.render({
      error,
      displayText,
      handleClick,
      handleReset,
      handleCalculate
    });
  }
}
