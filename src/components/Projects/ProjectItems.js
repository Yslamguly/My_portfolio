import BackgroundGenerator from '../../Images/BackgroundGeneratorCompressed.png'
import Bookshop from '../../Images/Bookshop.png'
import ScholarshipFinder  from '../../Images/ScholarshipFinder.png'
export const ProjectItems = [
    {
        projectDescription: 'An online bookshop, where browsing and buying books is made easy and enjoyable. ' +
            'With secure Stripe payment integration, you can shop with confidence, using your preferred payment method. ' +
            'User-friendly interface, powered by JSON Web Tokens (JWT) and Google authentication, ensures seamless login and account access. ' +
            'A collection of books can be discovered with the convenience of pagination, allowing to effortlessly navigate through pages. ' +
            'Forgot your password? No worries. Password reset and email verification features are covered. ' +
            'Favorite books can be added to the shopping cart and search can be customized with responsive design, and filter and sort by genre, author, price and etc.',
        projectTitle: 'Online Bookshop' ,
        sourceCode: 'https://github.com/Yslamguly/bookshop_front',
        seeLive:null,
        image:Bookshop,
    },
    {
        projectDescription: 'The Scholarship Finder Web App is a user-friendly platform designed to help students find and manage scholarships. ' +
            'Developed collaboratively by a team of five skilled developers, the frontend of the web application was built using React, while the backend was powered by .NET 6. ' +
            'This powerful combination of technologies provides a seamless and efficient experience for students in their scholarship search. ' +
            'The app offers user registration and login functionality, allowing students to access personalized features. ' +
            'Additionally, the wishlist feature enables users to save scholarships of interest for future reference. ' +
            'With the aid of a powerful search bar, students can easily discover a wide range of scholarship opportunities. ',
        projectTitle: 'Scholarship Finder' ,
        sourceCode: 'https://github.com/Yslamguly/ScholarshipFinder',
        seeLive: null,
        image:ScholarshipFinder,
    },
    {
        projectDescription: 'This app helps to generate gradient color based on 2 colors.' +
            'You can either choose your own colors or click on generate button that will randomly generate a gradient color for you.' +
            'You can choose the direction of the gradient flow and copy CSS code to your clipboard.',
        projectTitle:'Background Generator',
        sourceCode: 'https://github.com/Yslamguly/ReactBackgroundGenerator',
        seeLive:'https://yslamguly.github.io/ReactBackgroundGenerator/',
        image:BackgroundGenerator
    }
]
