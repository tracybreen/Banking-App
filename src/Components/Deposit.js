import React from "react"
import Card from "./Context";

function Deposit(){
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Deposit"
      title="Enter deposit amount:"
      text="$0.00"
      body={(<img src="../bank.png" className="img-fluid" alt="Responsive Image"/>)}
     />
  );
}

export default Deposit;