import {meta,  starbucks, tesla} from "../assets/images";

import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui, 
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
 
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
 
  
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
   
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "infotrixs",
        icon: meta,
        iconBg: "#accbe1",
        date: "Oct 2023",
        points: [
            "Developed a landing page of Apple Vision Pro website using some javascript animation libraries.",
            "Build home page of quiz app using basic html, css and javascript.",
            "In addition to frontend, also got an opportunity to work on backend related stuff like created login and signup page for users.",  
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Bharat Intern",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Nov 2023 - present",
        points: [
            "Got an opportunity to work on various projects.",
            "Creating a blog website for reading and writing posts using HTML, CSS, Node.js and MongoDB for data storage.",
            "Building a money tracker app for managing expenses and income using HTML, CSS, Node.js, and MongoDB.",
            
        ],
    },
    {
        title: "Content Writer",
        company_name: "..",
        icon: starbucks,
        iconBg: "#b7e4c7",
        date: "Jan 2023 - Present",
        points: [
           " contributed to my college magazine, exploring the vital theme of menstrual hygiene, aiming to break taboos and promote informed conversations for better awareness and proper practices.",
           "Published an artice on BlockChain technology in TCET open source.",
         
        ],
    },
  
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/kashish-51',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/kashish-singh-28a2a825a',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Chrome Extension ',
        description: 'Developed a chrome extension to save important links at one place. It has multiple features like you can delete a link, copy by just clicking a button and save as long as you want.',
        link: 'https://github.com/kashish-51/chrome_extension',
    },
    {
      
        iconUrl: car,
        theme: 'btn-back-green',
        name: 'Travelopia',
        description: 'Designed a simple frontend of travel booking website.',
        link: 'https://github.com/kashish-51/Travelopia',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-blue',
        name: 'Apple Vision Pro',
        description: 'Built a  clone of Apple Vision Pro website with its cool animations using gsap library of javascript.',
        link: 'https://github.com/kashish-51/Apple-Vision-Pro',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'voting System',
        description: 'Built frontend design of a voting system by using various framework. ',
        link: 'https://github.com/kashish-51/voting_system',
    },

    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Quiz Game',
        description: 'Developed a quiz application using api that offers users the ability to log in, sign up, and engage in quizzes tailored to their preferred domains. Users can play quizzes and, upon completion, their scores are automatically calculated. Its a dynamic platform that enhances the users experience through personalized quiz sessions.',
        link: 'https://github.com/kashish-51/quizgame',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'MyNotes',
        description: 'This is a MERN based website wherein you can perform CRUD operation.Ypu can login, signup, create note, update it and delete it.',
        link: 'https://github.com/kashish-51/MyNotes',
    }
];


