import EazyMart from "../src/assets/img/EazyMart.png";
import ChatSupport from "../src/assets/img/project2.png";
import NoteTaker from "../src/assets/img/project3.png";
import TravelGuide from "../src/assets/img/project1.png";
import InventoryHub from "../src/assets/img/InventoryHub.png";

const logotext = "Naod";
const meta = {
  title: "Naod Hunde",
  description:
    "I'm Naod Hunde, a full stack developer based in Sydney, Australia specializing in building exceptional websites, applications, and everything in between.",
};

const introdata = {
  title: "I’m Naod Hunde",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    third: "I develop mobile apps",
  },
  description:
    "I'm Naod Hunde, a full stack developer based in Sydney, Australia specializing in building exceptional websites, applications, and everything in between.",
  your_img_url: "",
};

const dataabout = {
  title: "About me",
  aboutme:
    "I’m a Junior Software Developer and I’m knowledgeable in user interface, testing and debugging processes. I am a driven and self-motivated professional who likes to solve problems. By combining a passion for usability and user experience with technical knowledge, I create client friendly and efficient digital experiences with attention to detail. I strive to bring a collaborative spirit that enables the smooth functionality of cross functional teams.",
};

const skills = [
  {
    name: "HTML5, CSS3",
  },
  {
    name: "JavaScript, jQuery",
  },
  {
    name: "Bootstrap, responsive web design",
  },
  {
    name: "Node.js, Express.js",
  },
  {
    name: "SQL and NoSQL databases (PostgreSQL, MySQL, MongoDB",
  },
  {
    name: "React",
  },
  {
    name: "Git, Github, Version Control",
  },
  {
    name: "RESTful API design and development",
  },
  {
    name: "AWS, Azure, Heroku, PWA",
  },
  {
    name: "Continuous Integration and Continuous Deployment (CI/CD) tools (Jenkins, Travis CI, CircleCI, GitLab CI)",
  },
];

const services = [
  {
    title: "Frontend Development",
    description:
      "Experienced in using modern technologies and frameworks to create user-friendly and responsive web interfaces. Skilled in HTML, CSS, JavaScript and frameworks such as React.js.",
  },
  {
    title: "Backend Development",
    description:
      "Proficient in server-side programming, creating APIs, managing databases, and implementing authentication and authorization. Familiar with Node.js, Express.js, and databases like MongoDB and SQL.",
  },
  {
    title: "Full Stack Applications",
    description:
      "Capable of designing, developing, and managing complete web applications. This involves integrating frontend and backend technologies, ensuring efficient data flow, and optimizing application performance.",
  },
  {
    title: "Testing & Debugging",
    description:
      "Experience with testing methodologies, debugging tools, and writing maintainable code. Knowledgeable in both unit testing and integration testing.",
  },
  {
    title: "Version Control & Deployment",
    description:
      "Familiar with Git for version control, collaboration, and code management. Experienced in deploying applications using platforms like Heroku and Netlify.",
  },
];

const dataportfolio = [
  {
    img: EazyMart,
    description:
      "A MERN stack web application enabling users to search, compare, and manage electronic products",
    link: "https://eazymartshop.herokuapp.com/",
    code: "https://github.com/naodhu/chat-support1.git",
  },
  {
    img: ChatSupport,
    description:
      " The platform enables users to communicate with support agents to resolve their issues promptly and provides the option to view previous support tickets for reference.",
    link: "https://github.com/naodhu/chat-support1.git",
    code: "https://github.com/naodhu/chat-support1.git",
  },
  {
    img: NoteTaker,
    description:
      "A note-taking app built with Node.js and Express.js, allowing users to create, view, and delete notes efficiently.",
    link: "#",
    code: "https://github.com/naodhu/Note-taker.git",
  },
  {
    img: TravelGuide,
    description:
      "An engaging Australian travel guide website using HTML, CSS, JavaScript, jQuery, and Bootstrap.",
    link: "https://naodhu.github.io/australian-travel-guide/",
    code: "https://github.com/naodhu/australian-travel-guide.git",
  },
  {
    img: InventoryHub,
    description:
      "Allowing users to create, read, update, and delete product entries. Utilized modern technologies, including React, Node.js, Express, and MongoDB.",
    link: "#",
    code: "https://github.com/naodhu/Products.git",
  },
];

const contactConfig = {
  YOUR_EMAIL: "naodhunde@gmail.com",
  YOUR_FONE: "+61 414 2525 751",
  description:
    "Please feel free to contact me if you have any questions or would like to work together on a project. I look forward to hearing from you!",
  YOUR_SERVICE_ID: process.env.YOUR_SERVICE_ID,
  YOUR_TEMPLATE_ID: process.env.YOUR_TEMPLATE_ID,
  YOUR_USER_ID: process.env.YOUR_USER_ID,
};

const socialprofils = {
  github: "https://github.com/naodhu",
  facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/naod-hunde/",
  twitter: "https://twitter.com",
};
export {
  meta,
  dataabout,
  dataportfolio,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
