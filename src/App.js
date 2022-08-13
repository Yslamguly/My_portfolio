import './App.css';
import Landing from "./components/Landing/Landing";
import React from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import BackgroundGenerator from '../src/Images/BackgroundGenerator.png'
import BooksInventory from '../src/Images/BooksInventory.png';

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
                      projectTitle={'Background Generator'} sourceCode={'#about'} seeLive={'#about'} image={BackgroundGenerator}/>
            <Projects projectDescription={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n' +
            '                                Excepturi\n' +
            '                                neque, ipsa animi\n' +
            '                                maiores repellendus distinctio aperiam earum dolor voluptatum consequatur blanditiis\n' +
            '                                inventore debitis fuga numquam voluptate ex architecto itaque molestiae.'}
                      projectTitle={'Books Inventory'} sourceCode={'#about'} seeLive={'#about'} image={BooksInventory}/>
        </div>
    );
}

export default App;

