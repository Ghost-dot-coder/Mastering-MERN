import "./App.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [year, setYear] = useState(0);
  const [rate, setRate] = useState(0);

  const [invalidPrinciple, setinvalidPrinciple] = useState(false);
  const [invalidRate, setinvalidRate] = useState(false);
  const [invalidYear, setinvalidYear] = useState(false);

  const validateInput = (inputTag) => {
    const { name, value } = inputTag;

    console.log(name, value);
    // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    // // \d : alt for numbers
    // console.log(!!value.match(/^\d*.?\d+$/));
    if (name == "principle") {
      setPrinciple(value);
      if (!!value.match(/^\d*\.?\d+$/)) {
        setinvalidPrinciple(false);
      } else {
        setinvalidPrinciple(true);
      }
    }

    if (name == "interest") {
      setRate(value);
      if (!!value.match(/^\d*\.?\d+$/)) {
        setinvalidRate(false);
      } else {
        setinvalidRate(true);
      }
    }
    if (name == "year") {
      setYear(value);
      if (!!value.match(/^\d*\.?\d+$/)) {
        setinvalidYear(false);
      } else {
        setinvalidYear(true);
      }
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (principle && rate && year) {
      setInterest((principle * year * rate) / 100);
    } else {
      alert("Fill the form");
    }
  };
  const handleReset = () => {
    setInterest(0);
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setinvalidPrinciple(false);
    setinvalidYear(false);
    setinvalidRate(false);
  };
  return (
    <>
      <div
        style={{ width: "100%", minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center bg-dark"
      >
        <div style={{ width: "600px" }} className="bg-light rounded p-5">
          <h3 className="text-center">Simple Interest Calculator</h3>
          <p className="text-center">Calculate your simple interest easily!</p>
          <div className="bg-warning p-3 text-light text-center rounded">
            <h1>₹ {interest}</h1>
            <p className="fw-bolder">Total simple interest</p>
          </div>
          <form action="" className="mt-5">
            {/* Principle */}
            <div className="mb-3">
              <TextField
                className="w-100"
                id="outlined-principle"
                label="₹ Principle amount"
                variant="outlined"
                onChange={(e) => validateInput(e.target)}
                name="principle"
                value={principle || ""}
              />
            </div>
            {/* invalid Principle */}
            {invalidPrinciple && (
              <div className="text-danger mb-3 fw-bolder">
                Invalid principle amount
              </div>
            )}

            {/* Rate of interest */}
            <div className="mb-3">
              <TextField
                className="w-100"
                id="outlined-rate"
                label="₹ Rate of interest"
                variant="outlined"
                onChange={(e) => validateInput(e.target)}
                name="interest"
                value={rate || ""}
              />
            </div>
            {/* invalid Principle */}
            {invalidRate && (
              <div className="text-danger mb-3 fw-bolder">
                Invalid Rate amount
              </div>
            )}
            {/* Year */}
            <div className="mb-3">
              <TextField
                className="w-100"
                id="outlined-year"
                label="Year"
                variant="outlined"
                onChange={(e) => validateInput(e.target)}
                name="year"
                value={year || ""}
              />
            </div>
            {/* invalid Principle */}
            {invalidYear && (
              <div className="text-danger mb-3 fw-bolder">Invalid Year</div>
            )}
            <Stack direction="row" spacing={2}>
              <Button
                type="submit"
                className="bg-dark"
                style={{ width: "50%", height: "70px" }}
                variant="contained"
                onClick={handleCalculate}
                disabled={invalidPrinciple || invalidRate || invalidYear}
              >
                CALCULATE
              </Button>
              <Button
                onClick={handleReset}
                className="bg-light border border-dark text-dark"
                style={{ width: "50%", height: "70px" }}
                variant="outlined"
              >
                RESET
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
