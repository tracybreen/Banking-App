import React from "react"
import ReactBootstrap from "react-bootstrap"
import axios from "axios"
import Home from "./Components/Home"
import Login from "./Components/Login"
import AllData from "./Components/AllData"
import CreateAccount from "./Components/CreateAccount"
//import Context from "./Components/Context"
import Deposit from "./Components/Deposit"
import NavBar from "./Components/NavBar"
import Withdraw from "./Components/Withdraw"
import Balance from "./Components/Balance"
import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        {/* <UserContext.Provider value={{users:[{name:'tracy', email:'fake@me.com', password:'secret', balance: 100}]}}> */}
        <Routes>
        <Route path="home" exact element={<Home />} />
        <Route path="createaccount" element={<CreateAccount />} />
        <Route path="login" element={<Login />} />
        <Route path="deposit" element={<Deposit />} />
        <Route path="withdraw" element={<Withdraw />} />
        <Route path="balance" element={<Balance />} />
        <Route path="alldata" element={<AllData />} />
        </Routes>
      {/* </UserContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//     <>
//       <NavBar/>
//       <Login />
//       </>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           This will be a Bad Bank
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
