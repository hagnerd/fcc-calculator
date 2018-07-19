import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

const Button = ({ btnText, handleClick, id, type, cssOverride }) => (
  <button
    className={css`
      grid-area: ${id};
      background-color: #f7f8f9;
      font-family: "IBM Plex Sans", sans-serif;
      font-size: 1.5rem;
      cursor: pointer;
      border: 1px solid #eff0f1;
      transition: all 150ms ease-in-out;
      &:focus {
        outline: none;
        border: 1px solid #19c75d;
      }
    `}
    id={id}
    type={type}
    onClick={handleClick}
  >
    {btnText}
  </button>
);

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

const btnFactory = type => list => ({ handleClick }) =>
  list.map(({ text, id }) => (
    <Button
      key={id}
      btnText={text}
      handleClick={() => handleClick({ text, type })}
      id={id}
      type={type}
    />
  ));

const numbers = [
  { id: "zero", text: "0" },
  { id: "one", text: "1" },
  { id: "two", text: "2" },
  { id: "three", text: "3" },
  { id: "four", text: "4" },
  { id: "five", text: "5" },
  { id: "six", text: "6" },
  { id: "seven", text: "7" },
  { id: "eight", text: "8" },
  { id: "nine", text: "9" }
];

const operators = [
  { id: "add", text: "+" },
  { id: "subtract", text: "-" },
  { id: "multiply", text: "x" },
  { id: "divide", text: "/" }
];

export const NumBtns = btnFactory("number")(numbers);

export const OperatorBtns = btnFactory("operator")(operators);

export const ClearBtn = ({ handleClick }) => (
  <Button type="reset" id="clear" btnText="AC" handleClick={handleClick} />
);

export const EqualsBtn = ({ handleClick }) => (
  <Button type="reduce" id="equals" btnText="=" handleClick={handleClick} />
);

export const DecimalBtn = ({ handleClick }) => (
  <Button type="decimal" id="decimal" btnText="." handleClick={handleClick} />
);

export default Button;
