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

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'tracy', email:'fake@me.com', password:'secret', balance: 100}]}}>
        <Route path="/" exact component={Home} />
        <Route path="/createaccount/" component={CreateAccount} />
        <Route path="/login/" component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/balance/" component={Balance} />
        <Route path="/alldata/" component={AllData} />
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
        
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           This will be a Bad Bank
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
