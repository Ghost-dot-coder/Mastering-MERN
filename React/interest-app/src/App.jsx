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

  const validateInput = (inputTag)=>{
    const {name,value} = inputTag
    console.log(name,value);
    
  }
  
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
            <h1>₹ 0</h1>
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
              />
            </div>
            {/* Rate of interest */}
            <div className="mb-3">
              <TextField
                className="w-100"
                id="outlined-rate"
                label="₹ Rate of interest"
                variant="outlined"
                onChange={(e) => validateInput(e.target)}
                name="interest"
              />
            </div>
            {/* Year */}
            <div className="mb-3">
              <TextField
                className="w-100"
                id="outlined-year"
                label="Year"
                variant="outlined"
                onChange={(e) => validateInput(e.target)}
                name="year"
              />
            </div>
            <Stack direction="row" spacing={2}>
              <Button
                className="bg-dark"
                style={{ width: "50%", height: "70px" }}
                variant="contained"
              >
                CALCULATE
              </Button>
              <Button
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
