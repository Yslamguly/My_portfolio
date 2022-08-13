import './App.css';
import Landing from "./components/Landing/Landing";
import React from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
        <Landing/>
        <About/>
        <Projects/>
    </div>
  );
}

export default App;

