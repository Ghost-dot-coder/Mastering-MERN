import React from "react";
// External css
import './index.css'

function Employee(props) {
  console.log(props);

  return (
    <div>
      <h3 className="head text-center">Employee..</h3>
      <span className="fw-bolder fs-1">Name: {props.dataFromParent}</span>
      <h2>Designation: {props.empDesignation}</h2>
      <h2>
        Status: {props.empStaus ? <span>Active</span> : <span>Inactive</span>}
      </h2>
    </div>
  );
}

export default Employee;
