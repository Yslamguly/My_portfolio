import React from "react";
import { AiOutlineLinkedin,AiFillFacebook,AiOutlineGithub,AiOutlineInstagram } from "react-icons/ai";
import './Contact.css'

const Contact = ()=>{
    return(
        <section id={'contact'}>
            <div className={'contact-wrapper'}>
                <h2 className={'contact'}>Contact</h2>
                <h1 className={'get-in-touch'}>Get in touch</h1>

                <div className={'connect-container'}>
                    <div className={'form-container'}>
                        <p>Fill in your info in the form below and I look forward to hearing from you!</p>
                        <input className={'input input-name'} placeholder={'Name'} type={"text"} required={true}/>
                        <input className={'input input-email'} placeholder={'Email'} type={"email"} required={true}/>
                        <textarea className={'input input-message'} placeholder={'Message...'} required={true}/>
                        <button className={'btn btn-send-email'} type={"submit"}>Send Email</button>
                    </div>
                    <div className={'social-media-container'}>
                        <p className={'find-online-text'}>Find me on these online spaces too!</p>
                        <div className={'flex flex-row justify-between  mt3 '}>
                            <a href={'https://github.com/Yslamguly'} className={'white pa3 link grow'}>
                                <AiOutlineGithub size={'35'} />
                            </a>
                            <a href={'https://www.facebook.com/profile.php?id=100012479084146'} className={'white pa3 link grow'}>
                                <AiFillFacebook size={'35'}/>
                            </a>
                            <a href={'https://www.linkedin.com/in/yslamguly-pirgulyyev-60a373225/'} className={'white pa3 link grow'}>
                                <AiOutlineLinkedin size={'35'}/>
                            </a>
                            <a href={'https://www.instagram.com/islampirkuliev/'} className={'white pa3 link grow'}>
                                <AiOutlineInstagram size={'35'}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div>*/}
            {/*    <a href={'mailto:islamguly28@gmail.com'} className={'link white ba bw2 fw4 section-title w-100 dim'} style={{fontSize:'2rem'}}>Contact me</a>*/}
            {/*</div>*/}
            {/*<Fade bottom>*/}
            {/*<div className={'flex flex-row justify-center items-center mt3 '}>*/}
            {/*    <a href={'https://github.com/Yslamguly'} className={'white pa3 link grow'}>*/}
            {/*        <AiOutlineGithub size={'50'} />*/}
            {/*    </a>*/}
            {/*    <a href={'https://www.facebook.com/profile.php?id=100012479084146'} className={'white pa3 link grow'}>*/}
            {/*        <AiFillFacebook size={'50'}/>*/}
            {/*    </a>*/}
            {/*    <a href={'https://www.linkedin.com/in/yslamguly-pirgulyyev-60a373225/'} className={'white pa3 link grow'}>*/}
            {/*        <AiOutlineLinkedin size={'50'}/>*/}
            {/*    </a>*/}
            {/*</div>*/}
            {/*</Fade>*/}
        </section>
    )
}
export default Contact;
