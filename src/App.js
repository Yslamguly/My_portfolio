import './App.css';
import Landing from "./components/Landing/Landing";
import React from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import BackgroundGenerator from '../src/Images/BackgroundGenerator.png'
import BooksInventory from '../src/Images/BooksInventory.png';
import FaceDetector from '../src/Images/FaceDetector.png'
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
            <Projects projectDescription={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n' +
            '                                Excepturi\n' +
            '                                neque, ipsa animi\n' +
            '                                maiores repellendus distinctio aperiam earum dolor voluptatum consequatur blanditiis\n' +
            '                                inventore debitis fuga numquam voluptate ex architecto itaque molestiae.'}
                      projectTitle={'Background Generator'} sourceCode={'https://github.com/Yslamguly/ReactBackgroundGenerator'} seeLive={'https://yslamguly.github.io/ReactBackgroundGenerator/'} image={BackgroundGenerator}/>
            <Projects projectDescription={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n' +
            '                                Excepturi\n' +
            '                                neque, ipsa animi\n' +
            '                                maiores repellendus distinctio aperiam earum dolor voluptatum consequatur blanditiis\n' +
            '                                inventore debitis fuga numquam voluptate ex architecto itaque molestiae.'}
                      projectTitle={'Books Inventory'} sourceCode={'https://github.com/Yslamguly/BooksInventory'} seeLive={'#about'} image={BooksInventory}/>
            <Projects projectDescription={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n' +
            '                                Excepturi\n' +
            '                                neque, ipsa animi\n' +
            '                                maiores repellendus distinctio aperiam earum dolor voluptatum consequatur blanditiis\n' +
            '                                inventore debitis fuga numquam voluptate ex architecto itaque molestiae.'}
                      projectTitle={'Face Detector'} sourceCode={'https://github.com/Yslamguly/face-detector'} seeLive={'https://yslamguly.github.io/face-detector/'} image={FaceDetector}/>
            <Footer/>
        </div>
    );
}

export default App;

