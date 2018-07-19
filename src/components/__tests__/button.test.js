import React from "react";
import { render } from "react-testing-library";
import Button from "../button";

const propFac = props => ({
  btnText: "2",
  handleClick: jest.fn(),
  id: "two",
  type: "number",
  ...props
});

test("should render without crashing", () => {
  const props = propFac();
  render(<Button {...props} />);
});

test("should render the text passed in", () => {
  const props = propFac();
  const { queryByText } = render(<Button {...props} />);
  expect(queryByText(props.btnText)).toBeTruthy();
});
