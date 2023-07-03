import React from "react";
import {SkillsItems, SkillsItems2, SkillsNames, SkillsNames2} from "./SkillsItems";
import './skills.css'
export const Skills = () =>{
    return(
        <section id={'skills'}>
            <div className={'skills-wrapper'}>

                <div className={'flex flex-row justify-center flex-wrap  mt3 '}>
                    {SkillsItems.map((Icon,index)=>(
                        <div key={index}>
                            <div className={'white pl4 pr4 pt4 pb2  grow'}>
                                <Icon size={'70'}/>
                            </div>
                            <p style={{color:'#656565'}}>{SkillsNames[index]}</p>
                        </div>
                    ))}
                </div>
                <div className={'flex flex-row justify-center flex-wrap  mt3 '}>
                    {SkillsItems2.map((Icon,index)=>(
                        <div key={index}>
                            <div className={'white pl4 pr4 pt4 pb2  grow'}><Icon size={'70'}/></div>
                            <p style={{color:'#656565'}}>{SkillsNames2[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
