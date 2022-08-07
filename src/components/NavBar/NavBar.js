import React from "react";
import './NavBar.css'
import MyResume from '../../assets/Yslamguly-Resume Junior.pdf'

const NavBar = () => {
    return (
        <nav className="dt w-100 border-box pa3 ph5-ns nav-background z-1 fixed">
            <div className="dtc v-mid w-75 tr">
                <a className="link dim white f6 f5-ns dib mr3 mr4-ns" href={MyResume} target="_blank" rel="noreferrer" title="CV">View Resume</a>
                <a className="link dim white f6 f5-ns dib mr3 mr4-ns"
                   href="https://www.linkedin.com/in/yslamguly-pirgulyyev-60a373225/" title="LinkedIn">LinkedIn</a>
                <a className="link dim white f6 f5-ns dib" href="https://github.com/Yslamguly" title="GitHub">GitHub</a>
            </div>
        </nav>
    )
}
export default NavBar
