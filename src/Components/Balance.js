import React from "react"
import { Card } from "./Card";
import { UserContext } from "./Context"


function Balance(){
  const ctx = React.useContext(UserContext);
  console.log(ctx);

  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Balance"
      title="Your current balance is:"
      text="$100.00"
      body={(<img src="../bank.png" className="img-fluid" alt="Responsive"/>)}
     />
  );
}

export default Balance;