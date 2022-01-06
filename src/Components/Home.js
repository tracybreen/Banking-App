import React from "react"
import Card from "./Context";

function Home() {
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="BadBank Landing Page"
      title="Welcome to the Bank"
      text="Banky bank bank stuff."
      body={(<img src="../bank.png" className="img-fluid" alt="Responsive Image"/>)}
     />
  );
}

export default Home