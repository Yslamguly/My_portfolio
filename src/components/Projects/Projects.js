import React from "react";
import Tilty from 'react-tilty';
import './Projects.css'
import Fade from 'react-reveal/Fade';
import {ProjectItems} from "./ProjectItems";

const Projects = ({projectTitle, projectDescription, sourceCode, seeLive, image}) => {
    return (
        <section id={'projects'}>
            {ProjectItems.map((project)=>(

            <div className="mw9 center ph3-ns pt4">
                <div className="cf ph2-ns">
                    <div className="fl w-40-ns w-100-m pa2 pr5 ">
                        <div className="flex flex-column">
                            <h1 className={'tl'}>{project.projectTitle}</h1>
                            <Fade bottom>
                                <p className={'tl lh-copy'}>{project.projectDescription}</p>
                                <div className={'pt4 flex flex-row'}>{project.usedTechnologies.map((Icon,index)=>(
                                    <div className={'pl2 pr2 pt2 pb2 grow'}><Icon size={'30'} /></div>
                                ))}</div>
                                <div>
                                    <a className={'tc ml4 fl mt4 w-25 h-100 dib link aqua-blue fw6'}
                                       href={project.sourceCode}>Source Code
                                    </a>
                                    {project.seeLive !== null &&
                                        <a className={' tc mt4 w-25 h-100 dib link aqua-blue fw6'}
                                           href={project.seeLive}>See Live
                                        </a>}
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <Fade bottom>
                        <div className="fl w-60-ns w-100-m pa2 pr5">
                            <Tilty glare={true} maxGlare={1} perspective={7000}>
                                <img src={project.image} className={'project-image br4'}
                                     alt="me"/>
                            </Tilty>
                        </div>
                    </Fade>
                </div>
            </div>
            ))}
        </section>
    )
}

export default Projects
