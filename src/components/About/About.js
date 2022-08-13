import React from "react";
import './Aboout.css'
import MyImage from "../../Images/IMG_5216.jpg";
import MyResume from '../../assets/Yslamguly-Resume Junior.pdf'


const About = () => {
    return (
        <section id={'about'}>
            <div className="mw9 center ph3-ns">
                <div className="cf ph2-ns">
                    <div className="fl w-100 pa2">
                        <div className=" pv4"><h1 className={'section-title'} style={{marginTop: '2rem'}}>About me</h1>
                        </div>
                    </div>
                </div>
                <div className="mw9 center ph3-ns">
                    <div className="cf ph2-ns">
                        <div className="fl w-100 w-50-ns pa2">
                            <div className=" pv4"><img src={MyImage} className={'br4 grow shadow-5 my-image'}
                                                       alt="me"/></div>
                        </div>
                        <div className="fl w-100 w-50-ns pa2">
                            <div className="pt5-ns pt3-m pt0-m tl-ns tc lh-copy ">
                                <p className={'pt3'}>Ewrklnfkejrbgkrebgekrbge kjrbgekrbgekrg erkgnerjkgnerjkg
                                    erkgjnerjgknerg erkgnjerkjgre g er ge
                                    efbehrfberhjgfbehjgerbger gejhbgejhgbrejhgberjgberjger grjhbergjergreger</p>
                                <p className={'pt3'}>Rejnfgejkrg ekjrgberhkg gkerbgekrgnrejkq gkgjqnrgj rkegjnregk
                                    ergkejnrjge
                                    rkgkregerng
                                    ergkejrgn
                                    ergjkbekgbegbe jgkjebgekgjebgkegb ekrgberkgerbg jkerbgerkg ejkrgberkjgerg
                                </p>
                                <a className={'white ba bw1 pr1 pl1 tc mt4  h-100 dib link ' +
                                'hover-bg-light-green hover-white '}
                                   href={MyResume} target="_blank" rel="noreferrer" title="CV">View Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About