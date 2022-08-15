import React from "react";
import { AiOutlineLinkedin,AiFillFacebook,AiOutlineGithub } from "react-icons/ai";

const Footer = ()=>{
    return(
        <footer>
            <div>
                <a href={'mailto:islamguly28@gmail.com.com'} className={'link tc white ba bw2 fw4 section-title w-100'} style={{fontSize:'2rem'}}>Contact me</a>
            </div>
            <div className={'flex flex-row justify-center items-center mt3 '}>
                <a href={'https://github.com/Yslamguly'} className={'white pa3'}>
                    <AiOutlineGithub size={'50'} />
                </a>
                <a href={'mailto:islamguly28@gmail.com.com'} className={'white pa3'}>
                    <AiFillFacebook size={'50'}/>
                </a>
                <a href={'https://www.linkedin.com/in/yslamguly-pirgulyyev-60a373225/'} className={'white pa3'}>
                    <AiOutlineLinkedin size={'50'}/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;