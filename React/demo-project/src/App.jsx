import Employee from "./Employee";

function App() {
  const empNAme = "rahul";
  return (
    <>
      <h1 className="text-center text-danger">Demo project</h1>
      <Employee />
      <h3>
        Inside app component:{" "}
        <span className="text-primary fw-bolder">{empNAme}</span>
      </h3>
    </>
  );
}

export default App;
