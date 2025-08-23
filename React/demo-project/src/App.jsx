import Company from "./Company";
import Employee from "./Employee";

function App() {
  const empNAme = "rahul";
  const ShowAlert = () =>{
    alert("Button clicked")
  }
  return (
    <>
      <h1 style={{textAlign:"center", color:"red"}}>Demo project</h1>
      <Employee dataFromParent={empNAme} empDesignation="Deigner" empStaus />
      <Company />
    <div className="text-center">
      <button className="btn btn-primary" onClick={ShowAlert}>Show alert</button>
  
    </div>
    </>
  );
}

export default App;
