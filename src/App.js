import './App.css';
import Landing from "./components/Landing/Landing";
import React from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import {ProjectItems} from "./components/Projects/ProjectItems";
import {Title} from "./components/Title";

function App() {
    return (
        <div className="App">
            <Landing/>
            <About/>
            <Title name={'Projects'}/>
            {ProjectItems.map((project)=>(
                <Projects projectDescription={project.projectDescription}
                          projectTitle={project.projectTitle}
                          sourceCode={project.sourceCode}
                          seeLive={project.seeLive}
                          image={project.image}/>
            ))}
            <Footer/>
        </div>
    );
}

export default App;

