import React from "react";
import Tilty from 'react-tilty';
import './Projects.css'
import Fade from 'react-reveal/Fade';

const Projects = ({projectTitle, projectDescription, sourceCode, seeLive, image}) => {
    return (
        <section id={'projects'} className={''}>
            <div className="mw9 center ph3-ns pt4">
                <div className="cf ph2-ns">
                    <div className="fl w-40-ns w-100-m pa2 pr5 ">
                        <div className="flex flex-column">
                            <h1 className={'tl'}>{projectTitle}</h1>
                            <Fade bottom>
                                <p className={'tl lh-copy'}>{projectDescription}</p>
                                <div>
                                    <a className={'tc ml4 fl mt4 w-25 h-100 dib link aqua-blue fw6'}
                                       href={sourceCode}>Source Code
                                    </a>
                                    {seeLive !== null &&
                                        <a className={' tc mt4 w-25 h-100 dib link aqua-blue fw6'}
                                           href={seeLive}>See Live
                                        </a>}
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <Fade bottom>
                        <div className="fl w-60-ns w-100-m pa2 pr5">
                            <Tilty glare={true} maxGlare={1} perspective={7000}>
                                <img src={image} className={'project-image'}
                                     alt="me"/>
                            </Tilty>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default Projects
