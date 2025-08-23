import Company from "./Company";
import Employee from "./Employee";

function App() {
  const empNAme = "rahul";
  return (
    <>
      <h1 style={{textAlign:"center", color:"red"}}>Demo project</h1>
      <Employee dataFromParent={empNAme} empDesignation="Deigner" empStaus />
      <Company />


    </>
  );
}

export default App;
