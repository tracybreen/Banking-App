import React from "react"
import { Card } from "./Card"
import { UserContext } from "./Context"

function Deposit(){
  const ctx = React.useContext(UserContext);
console.log(ctx);
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Deposit"
      title="Enter deposit amount:"
      text="$0.00"
      body={(<img src="../bank.png" className="img-fluid" alt="Responsive"/>)}
     />
  );
}

export default Deposit;