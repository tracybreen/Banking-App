import React from "react"
import { Card } from "./Card";
import { UserContext } from "./Context"

function Login() {
  const ctx = React.useContext(UserContext);
  console.log(ctx);

  return (
    <Card
      bgcolor="success"
      txtcolor="white"
      header="Login"
      title="Your Account Login:"
      text="ID: _______ Password: _______"
      body={(<img src="../bank.png" className="img-fluid" alt="Responsive"/>)}
     />
  );
}

export default Login;