import React from "react"
import Card from "./Context";

function Balance(){
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Balance"
      title="Your current balance is:"
      text="$100.00"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive Image"/>)}
     />
  );
}

export default Balance;