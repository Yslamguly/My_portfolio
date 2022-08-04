import './App.css';
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import React from "react";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Landing/>
        {/*<About/>*/}
    </div>
  );
}

export default App;

