import React from "react";
import { render } from "react-testing-library";
import Display from "display";

test("should render without crashing", () => {
  render(<Display />);
});
