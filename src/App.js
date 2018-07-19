import React from "react";
import { css, injectGlobal } from "emotion";
import styled from "react-emotion";
import Calculator from "./containers/calculator-app";
import {
  NumBtns,
  OperatorBtns,
  EqualsBtn,
  DecimalBtn,
  ClearBtn
} from "./components/button";
import Display from "./components/display";
import Footer from "./components/footer";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:700');
  body, html {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F5F7F9;
  }
`;

const Center = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled("div")`
  height: 60vh;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "display display display display"
    "clear clear divide multiply"
    "seven eight nine subtract"
    "four five six add"
    "one two three equals"
    "zero zero decimal equals"
    "error error error error";
`;

const App = () => (
  <React.Fragment>
    <Calculator
      render={({
        error,
        displayText,
        handleClick,
        handleReset,
        handleCalculate
      }) => (
        <Center>
          <Grid>
            <Display displayText={displayText} />
            <NumBtns handleClick={handleClick} />
            <OperatorBtns handleClick={handleClick} />
            <EqualsBtn handleClick={() => handleCalculate(displayText)} />
            <DecimalBtn
              handleClick={() => handleClick({ type: "decimal", text: "." })}
            />
            <ClearBtn handleClick={handleReset} />
            {error && (
              <div
                className={css`
                  grid-area: error;
                  color: #cd4045;
                  font-family: "IBM Plex Sans", sans-serif;
                  font-size: 1.2rem;
                `}
              >
                {error}
              </div>
            )}
          </Grid>
        </Center>
      )}
    />
    <Footer />
  </React.Fragment>
);

export default App;
