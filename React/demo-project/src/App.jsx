import { useEffect, useRef, useState } from "react";
import Company from "./Company";
import Employee from "./Employee";
import MyCar from "./MyCar";
import Counter from "./Counter";
import Todo from "./Todo";

function App() {
  const ref = useRef(0);
  // const[count,setCount] = useState(0)
  const [userName, setUserName] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const empNAme = "rahul";
  const ShowAlert = () => {
    ref.current = ref.current + 1;
    // setCount(count+1)
    alert(`Button clicked..${ref.current}`);
  };

  const displayData = (data) => {
    alert(`The data is: ${data}`);
  };
  const getUserData = (e) => {
    // console.log(e);
    setUserName(e);
  };
  return (
    <>
      <Todo />
      <h1 style={{ textAlign: "center", color: "red" }}>Demo project</h1>
      <Employee dataFromParent={empNAme} empDesignation="Deigner" empStaus />
      <Counter />
      <Company />
      <div className="text-center">
        <button className="btn btn-primary" onClick={ShowAlert}>
          Show alert
        </button>
        <br />
        <button
          className="btn btn-success mt-4"
          onClick={() => displayData(empNAme)}
        >
          Show Data
        </button>
        <div className="w-50 m-5">
          <input
            ref={inputRef}
            className="form-control"
            type="text"
            onChange={(e) => getUserData(e.target.value)}
            placeholder="Enter Name"
          />
          <h1>{userName}</h1>
        </div>
      </div>
      <MyCar />
    </>
  );
}

export default App;
