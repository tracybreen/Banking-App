import React from "react"
import Card from "./Context";

function Login() {
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Login"
      title="Your Account Login:"
      text="ID: _______ Password: _______"
      body={(<img src="../bank.png" className="img-fluid" alt="Responsive Image"/>)}
     />
  );
}

export default Login;