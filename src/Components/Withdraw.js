import React from "react"
import Card from "./Context";

function Withdraw(){
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Withdraw"
      title="Enter Withdrawal Amount:"
      text="$0.00"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive Image"/>)}
     />
  );
}

export default Withdraw;