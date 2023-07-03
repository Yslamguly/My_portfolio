import BackgroundGenerator from '../../Images/BackgroundGeneratorCompressed.png'
import Bookshop from '../../Images/Bookshop.png'
import ScholarshipFinder  from '../../Images/ScholarshipFinder.png'
import {AiFillHtml5} from "react-icons/ai";
import {FaCss3} from "@react-icons/all-files/fa/FaCss3";
import {IoLogoJavascript} from "react-icons/io";
import {FaReact} from "@react-icons/all-files/fa/FaReact";
import {SiRedux} from "@react-icons/all-files/si/SiRedux";
import {FaNodeJs} from "@react-icons/all-files/fa/FaNodeJs";
import {SiTailwindcss} from "@react-icons/all-files/si/SiTailwindcss";
import {SiPostgresql} from "@react-icons/all-files/si/SiPostgresql";
import {AiOutlineGoogle} from "@react-icons/all-files/ai/AiOutlineGoogle";
import {FaStripe} from "@react-icons/all-files/fa/FaStripe";
import {SiCsharp} from "@react-icons/all-files/si/SiCsharp";
export const ProjectItems = [
    {
        projectDescription: 'Welcome to an online bookstore! ' +
            'Immerse yourself in a world of literary wonders from the comfort of your own screen. ' +
            'Explore our vast collection of books spanning various genres, eras, and themes. ' +
            'Whether you seek timeless classics, gripping mysteries, or heartwarming tales, this digital emporium has something to captivate every reader.',
        projectTitle: 'Online Bookshop' ,
        sourceCode: 'https://github.com/Yslamguly/bookshop_front',
        seeLive:null,
        image:Bookshop,
        usedTechnologies: [ AiFillHtml5, SiTailwindcss, IoLogoJavascript, FaReact, FaNodeJs, SiPostgresql, AiOutlineGoogle , FaStripe]
    },
    {
        projectDescription: 'Unlock the door to educational opportunities with the scholarship finder web app. ' +
            `Designed and developed to simplify the search for financial aid, ` +
            'this platform connects students with a comprehensive database of scholarships tailored to their unique needs and aspirations.',
        projectTitle: 'Scholarship Finder' ,
        sourceCode: 'https://github.com/Yslamguly/ScholarshipFinder',
        seeLive: null,
        image:ScholarshipFinder,
        usedTechnologies: [ AiFillHtml5, FaCss3 ,IoLogoJavascript, FaReact, SiRedux, SiCsharp, SiPostgresql]
    },
    {
        projectDescription: 'This app helps to generate gradient color based on 2 colors.' +
            'You can either choose your own colors or click on generate button that will randomly generate a gradient color for you.' +
            'You can choose the direction of the gradient flow and copy CSS code to your clipboard.',
        projectTitle:'Background Generator',
        sourceCode: 'https://github.com/Yslamguly/ReactBackgroundGenerator',
        seeLive:'https://yslamguly.github.io/ReactBackgroundGenerator/',
        image:BackgroundGenerator,
        usedTechnologies: [ AiFillHtml5, FaCss3, IoLogoJavascript, FaReact]
    }
]
