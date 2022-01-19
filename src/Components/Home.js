import React from "react"
import { Card } from "./Card";
import { UserContext } from "./Context"

function Home() {
  const ctx = React.useContext(UserContext);
  console.log(ctx);
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="BadBank Landing Page"
      title="Welcome to the Bank"
      text="Banky bank bank stuff."
      body={(<img src="../bank.png" className="img-fluid" alt="Responsive"/>)}
     />
  );
}

export default Home