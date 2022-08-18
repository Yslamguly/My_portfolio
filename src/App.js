import './App.css';
import Landing from "./components/Landing/Landing";
import React from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import BackgroundGenerator from '../src/Images/BackgroundGeneratorCompressed.png'
import BooksInventory from '../src/Images/BooksInventory-min.png';
import FaceDetector from '../src/Images/FaceDetectorCompressed.png'
import Footer from "./components/Footer/Footer";

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
            <Projects
                projectDescription={'This app helps to generate gradient color based on 2 colors. ' +
                'You can either choose your own colors or click on generate button that will randomly generate a gradient color for you. ' +
                'You can choose the direction of the gradient flow and copy CSS code to your clipboard.'}
                projectTitle={'Background Generator'}
                sourceCode={'https://github.com/Yslamguly/ReactBackgroundGenerator'}
                seeLive={'https://yslamguly.github.io/ReactBackgroundGenerator/'} image={BackgroundGenerator}/>
            <Projects
                projectDescription={'A University project where we developed a full-stack application with PHP, JavaScript and MySQL. ' +
                'This project includes register, sign in, session management and image upload. ' +
                'A user can perform CRUD operations on the books that have been added by him/her.'}
                projectTitle={'Books Inventory'} sourceCode={'https://github.com/Yslamguly/BooksInventory'}
                seeLive={'#about'} image={BooksInventory}/>
            <Projects projectDescription={'Full-stack web application with sign in and register. ' +
            'This app detects faces on the link you input using Clarifai API. ' +
            'Technologies used: NodeJS, ReactJS, PostgreSQL. ' +
            'Learned how to use API, fetch and manipulate with the data sent by a server. Only frontend can be seen live.'}
                      projectTitle={'Face Detector'} sourceCode={'https://github.com/Yslamguly/face-detector'}
                      seeLive={'https://yslamguly.github.io/face-detector/'} image={FaceDetector}/>
            <Footer/>
        </div>
    );
}

export default App;

