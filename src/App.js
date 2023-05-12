import './App.css';
import Landing from "./components/Landing/Landing";
import React from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import {ProjectItems} from "./components/Projects/ProjectItems";

function App() {
    return (
        <div className="App">
            <Landing/>
            <About titleName={'About me'}/>
            <div className="cf ph2-ns">
                <div className="fl w-100 pa2">
                    <div className=" pv4"><h1 className={'section-title'} style={{marginTop: '2rem'}}>Projects</h1>
                    </div>
                </div>
            </div>
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

