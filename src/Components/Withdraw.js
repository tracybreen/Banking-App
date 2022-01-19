import React from "react"
import { Card } from "./Card";
import { UserContext } from "./Context"

function Withdraw(){
  const ctx = React.useContext(UserContext);
  console.log(ctx);
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Withdraw"
      title="Enter Withdrawal Amount:"
      text="$0.00"
      body={(<img src="../bank.png" className="img-fluid" alt="Responsive"/>)}
     />
  );
}

export default Withdraw;