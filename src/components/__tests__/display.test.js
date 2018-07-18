import React from "react";
import { render } from "react-testing-library";
import Display from "../display";

const propFac = props => ({
  displayText: "10+2",
  ...props
});

test("should render without crashing", () => {
  const props = propFac();
  render(<Display {...props} />);
});

test("should render the displayText", () => {
  const props = propFac({
    displayText: "100*30"
  });

  const { getByText } = render(<Display {...props} />);
  expect(getByText(/100\*30/i)).toBeTruthy();
});
