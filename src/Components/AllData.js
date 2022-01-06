import React from "react"
import Card from "./Context";

function AllData() {
  const ctx = React.useContext(UserContext);

  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="All Data"
      title="Account Data:"
      text={JSON.stringify(ctx)}
      body={(<img src="bank.png" className="img-fluid" alt="Responsive Image"/>)}
    />
  );
}

export default AllData;