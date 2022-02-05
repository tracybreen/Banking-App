import React from "react"
import { Card } from "./Card";
import { UserContext } from "./Context"

function Home() {
  const ctx = React.useContext(UserContext);
  console.log(ctx);
  return (
    <div className="money-plant">
    <Card
      bgcolor="success"
      txtcolor="white"
      header="BadBank Landing Page"
      title="Welcome to the Bank"
      text="Banky bank bank stuff."
      body={(<img src="../bank.png" className="img-fluid" alt="Responsive"/>)}
     />
     </div>
  );
}

export default Home