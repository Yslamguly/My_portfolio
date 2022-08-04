import React from "react";
import '../About/Aboout.css'
import './Landing.css'
import MyImage from '../Images/IMG_4322.jpg'

const Landing = () => {
    return (
        <section className={''}>
            <div className={'container fw7   pl3 pr3 font'}>
                <h1 className={'tl ml3 pr6'}>Hi, my name is<span className={'light-green'}>Yslamguly</span>
                    <br/>I'm a CS student <br/>
                    <span style={{fontSize: '0.5em'}}>
                            <a className={'light-green tc mt5 h-100 w-25 link hover-bg-light-green hover-white'}
                               href="#about">About me
                            </a>
                    </span>
                </h1>
                <img src={MyImage} className={'mr2 br4 grow shadow-5'} style={{height: '60%'}} alt="night sky over water"/>
            </div>
        </section>
    )
}

export default Landing