import React from "react";
import './Landing.css'
import MyImage from '../../Images/IMG_4322-min.jpg'

const Landing = () => {
    return (
        <section>
            <div className={'container fw7 pt5  pl3 pr3 font'}>
                <h1 className={'tl ml3 pr6 animate__animated animate__slideInLeft animate__slow'}>Hi, my name is <span className={'light-green'}>Yslamguly</span>
                    <br/>I'm a software developer. <br/>
                    <span className={'about-me-link'}>
                        <a className={'light-green ba bw1 pr1 pl1 tc mt3 ml3 h-100 dib link ' +
                        'hover-bg-light-green hover-white ' +
                        'animate__animated ' +
                        'animate__slideInLeft ' +
                        'animate__delay-1s'}
                           href="#about">About me
                        </a>
                    </span>
                </h1>
                <img src={MyImage} className={'mr2 br4 grow shadow-5'}
                     alt="me"/>
            </div>
        </section>
    )
}

export default Landing
