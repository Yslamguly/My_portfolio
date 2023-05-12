import BackgroundGenerator from '../../Images/BackgroundGeneratorCompressed.png'
import BooksInventory from '../../Images/BooksInventory-min.png'
import FaceDetector  from '../../Images/FaceDetectorCompressed.png'
export const ProjectItems = [
    {
        projectDescription:'This app helps to generate gradient color based on 2 colors. \' +\n' +
            '                \'You can either choose your own colors or click on generate button that will randomly generate a gradient color for you. \' +\n' +
            '                \'You can choose the direction of the gradient flow and copy CSS code to your clipboard.\'}\n' +
            '                projectTitle={\'Background Generator',
        projectTitle:'Background Generator',
        sourceCode: 'https://github.com/Yslamguly/ReactBackgroundGenerator',
        seeLive:'https://yslamguly.github.io/ReactBackgroundGenerator/',
        image:BackgroundGenerator
    },
    {
        projectDescription: 'A University project where we developed a full-stack application with PHP, JavaScript and MySQL. ' +
            'This project includes register, sign in, session management and image upload. ' +
            'A user can perform CRUD operations on the books that have been added by him/her.',
        projectTitle: 'Books Inventory' ,
        sourceCode: 'https://github.com/Yslamguly/BooksInventory',
        seeLive:null,
        image:BooksInventory,
    },
    {
        projectDescription: 'Full-stack web application with sign in and register. ' +
            'This app detects faces on the link you input using Clarifai API. ' +
            'Technologies used: NodeJS, ReactJS, PostgreSQL. ' +
            'Learned how to use API, fetch and manipulate with the data sent by a server. Only frontend can be seen live.',
        projectTitle: 'Face Detector' ,
        sourceCode: 'https://github.com/Yslamguly/face-detector',
        seeLive:'https://yslamguly.github.io/face-detector/',
        image:FaceDetector,
    }
]
