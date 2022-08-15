import React from "react";
import Tilty from 'react-tilty';
import './Projects.css'

const Projects = ({projectTitle,projectDescription,sourceCode,seeLive,image}) => {
    return (
        <section id={'projects'} className={''}>
            <div className="mw9 center ph3-ns pt4">
                <div className="cf ph2-ns">
                    <div className="fl w-40-ns w-100-m pa2 pr5 ">
                        <div className="flex flex-column">
                            <h1 className={'tl'}>{projectTitle}</h1>
                            <p className={'tl lh-copy'}>{projectDescription}</p>
                            <div>
                                <a className={'tc ml4 fl mt4 w-25 h-100 dib link ' +
                                'hover-bg-light-green hover-white '}
                                   href={sourceCode}>Source Code
                                </a>
                                <a className={' tc mt4 w-25 h-100 dib link dark-green'}
                                   href={seeLive}>See Live
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="fl w-60-ns w-100-m pa2 pr5">
                        <Tilty glare={true} maxGlare={1} perspective={7000}>
                        <img src={image} className={'project-image'}
                                                        alt="me"/>
                        </Tilty>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects