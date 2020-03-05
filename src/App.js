import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navmenu from "./component/navmenu"




const menu = [
  
  { titre: "Home" },
  { titre: "Services",
   drop: ["For entrepreneurs", "For students", "For hobbyists"]
   },
  { titre: "Contact" },

]


function App() {
  return (
    <div className="App">
      <Navmenu x={menu}  />
      <img src={logo} className="App-logo" alt="logo" />
    </div>


  );
}

export default App;
