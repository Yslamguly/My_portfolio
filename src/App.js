import './App.css';
import Landing from "./components/Landing/Landing";
import React from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import {Title} from "./components/Title";
import {Skills} from "./components/Skills/Skils";
function App() {
    return (
        <div className="App">
            <Landing/>
            <About/>
            <Title name={'Skills & Tools'}/>
            <Skills/>
            <Title name={'Projects'}/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;

