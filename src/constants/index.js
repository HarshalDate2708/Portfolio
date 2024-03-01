import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  chart,
  chatbot,
  portfolio,
  tailwind,
  nodejs,
  mongodb,
  python,
  git,
  Angular,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  userportal
  
  
  
} from "../assets";

export const navLinks = [
  {
    id: "About",
    title: "About",
  },
  {
    id: "Skills",
    title: "Skills",
  },
  {
    id: "Contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JAVASCRIPT",
    icon: javascript,
  },
  {
    name: "TYPESCRIPT",
    icon: typescript,
  },
  {
    name: "REACT JS",
    icon: reactjs,
  },
  {
    name: "REDUX",
    icon: redux,
  },
  {
    name: "TAILWIND CSS",
    icon: tailwind,
  },
  {
    name: "NODE JS",
    icon: nodejs,
  },
  {
    name: "MONGO DB",
    icon: mongodb,
  },
  {
    name: "ANGULAR",
    icon: Angular,
  },
  {
    name: "GIT",
    icon: git,
  },
  {
    name: "PYTHON",
    icon: python,
  },

];





const projects = [
  {
    name: "Portfolio",
    description:
      "Discover my React-powered portfolio website, where design meets functionality. Explore my web development journey through sleek interfaces and efficient code.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "three-js",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/HarshalDate2708/Portfolio",
    live_demo_link : "https://portfolio-one-topaz-73.vercel.app/"
  },
  {
    name: "Chatbot",
    description:
      "An NLP-based chatbot will generate automatic responses for any query regarding college information. Users can ask any questions and the web-based chatbot will give a proper response from the database.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/HarshalDate2708/College_Enquiry_Chatbot",
    live_demo_link:"https://github.com/HarshalDate2708/College_Enquiry_Chatbot"
  },
  // {
  //   name: "E-commerce",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "User Portal",
    description:
      "Explore our React-based User Portal for a seamless, efficient experience. Crafted with TypeScript, powered by Wretch for effortless API data retrieval. Dynamic user list, streamlined management via Context API, advanced filtering, and quick searches for optimal engagement.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Context API",
        color: "pink-text-gradient",
      },
    ],
    image: userportal,
    source_code_link: "https://github.com/HarshalDate2708/User_Portal_React_Typecript.git",
    live_demo_link:"https://user-portal-beta.vercel.app/"
  },
  {
    name: "Chatbot",
    description:
      "Explore my React-Next.js based chatbot which gives the answer to user's query. Easy to integrate with any web application.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/HarshalDate2708/Ask-AI.git",
    live_demo_link:"https://ask-ai-ashy.vercel.app"
  },
  {
    name: "Time Series Chart using React and D3.js",
    description:
      "Explore my time series chart graph implemented using d3.js library which includes advanced feature like zoom and pan. Dynamically graph get updated based on user activity like zoom or panning to left or right.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "D3.js",
        color: "green-text-gradient",
      },
      
    ],
    image: chart,
    source_code_link: "https://codesandbox.io/p/sandbox/keen-borg-nkzpqv",
    live_demo_link:"https://nkzpqv-5173.csb.app/"
  }
  
];

export { services, technologies, projects };
