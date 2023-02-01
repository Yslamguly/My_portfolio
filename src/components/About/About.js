import React from "react";
import './Aboout.css'
import MyImage from "../../Images/IMG_5216-min.jpg";
import MyResume from '../../assets/Yslamguly Pirgulyyev.pdf'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


const About = ({titleName}) => {
    return (
        <section id={'about'}>
            <div className="mw9 center ph3-ns">
                <div className="cf ph2-ns">
                    <div className="fl w-100 pa2">
                        <div className=" pv4"><h1 className={'section-title'}
                                                  style={{marginTop: '2rem'}}>{titleName}</h1>
                        </div>
                    </div>
                </div>
                <div className="mw9 center ph3-ns">
                    <div className="cf ph2-ns">
                        <Fade bottom>
                            <div className="fl w-100 w-50-ns pa2">
                                <div className=" pv4"><img src={MyImage} className={'br4 grow shadow-5 my-image'}
                                                           alt="me"/></div>
                            </div>
                        </Fade>
                        <div className="fl w-100 w-50-ns pa2">
                            <Slide bottom cascade>
                                <div className="pt5-ns pt3-m pt0-m tl-ns tc lh-copy ">
                                    <p className={'pt3 white'}>A third-year Computer Science student at <a
                                        href={'https://uni-eszterhazy.hu'}
                                        className={'link white di dim underline'}>EKCU</a>, Hungary. I am passionate
                                        about
                                        developing scalable and responsive web-applications to solve problems that
                                        delight
                                        end-users.</p>
                                    <p className={'pt3 white'}>I am eager to learn, improve my skills and gain hands-on experience in the industry.
                                        I am well-versed in at least one programming language and familiar with various development tools and techniques.
                                        I am a quick learner and can work well both independently and as part of a team.
                                    </p>
                                    <a className={'white ba bw1  pr1 pl1 tc mt4  h-100 dib link ' +
                                    'hover-bg-white aqua-blue  '}
                                       href={MyResume} target="_blank" rel="noreferrer" title="CV">View Resume
                                    </a>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About
