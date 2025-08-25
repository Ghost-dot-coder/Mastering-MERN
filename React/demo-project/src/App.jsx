import Company from "./Company";
import Employee from "./Employee";
import MyCar from "./MyCar";

function App() {
  const empNAme = "rahul";
  const ShowAlert = () => {
    alert("Button clicked");
  };
  const displayData= (data)=>{
    alert(`The data is: ${data}`)
  }
  const getUserData = (e)=>{
    console.log(e);
    
  }
  return (
    <>
      <h1 style={{ textAlign: "center", color: "red" }}>Demo project</h1>
      <Employee dataFromParent={empNAme} empDesignation="Deigner" empStaus />
      <Company />
      <div className="text-center">
        <button className="btn btn-primary" onClick={ShowAlert}>
          Show alert
        </button><br />
        <button className="btn btn-success mt-4" onClick={()=>displayData(empNAme)}>
          Show Data
        </button>
        <div className="w-50 m-5">
          <input className="form-control" type="text" onChange={(e)=>getUserData(e.target.value)} placeholder="Enter Name" />
        </div>
      </div>
      <MyCar/>
    </>
  );
}

export default App;
