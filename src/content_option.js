import EazyMart from "../src/assets/img/EazyMart.png";
import ChatSupport from "../src/assets/img/project2.png";
import NoteTaker from "../src/assets/img/project3.png";
import TravelGuide from "../src/assets/img/project1.png";
import InventoryHub from "../src/assets/img/InventoryHub.png";
import ExpenseManager from "../src/assets/img/ExpenseManager.png";
import InvestmentCalc from "../src/assets/img/react-investment-calculator.png";
import Nike from "../src/assets/img/Nike.png";
import {
  FaCode,
  FaLaptopCode,
  FaDesktop,
  FaNodeJs,
  FaDatabase,
  FaReact,
  FaGithub,
  FaServer,
  FaCloud,
  FaCodeBranch,
} from "react-icons/fa";

const logotext = "Naod";
const meta = {
  title: "Naod Hunde",
  description:
    "I'm Naod Hunde, a full stack developer based in Sydney, Australia specializing in building exceptional websites, applications, and everything in between.",
};

const introdata = {
  title: "Hello, I'm Naod Hunde",
  animated: {
    first: "Passionate about coding",
    second: "Crafting captivating websites",
    third: "Building innovative mobile apps",
  },
  description:
    "Greetings! I'm Naod Hunde, a dedicated full stack developer situated in the vibrant city of Sydney, Australia. My expertise lies in creating remarkable websites, crafting applications that push boundaries, and seamlessly connecting the digital world with real-life experiences.",
  your_img_url: "", // Add your image URL here
};


const dataabout = {
  title: "A Little Bit About Me",
  aboutme:
    "Greetings! I'm Naod Hunde, a budding Junior Software Developer based in sunny Sydney. My journey in the world of technology has equipped me with expertise in user interfaces, testing, and debugging processes. Driven by a relentless passion for problem-solving, I thrive on crafting elegant solutions that blend functionality and aesthetics. I'm a firm believer in the power of teamwork and collaboration, ensuring smooth operations within cross-functional setups. My dedication lies in creating digital experiences that are not only efficient but also user-centric and enjoyable.",
};


const skills = [
  {
    name: "HTML5, CSS3",
    icon: <FaCode />,
  },
  {
    name: "JavaScript, jQuery",
    icon: <FaLaptopCode />,
  },
  {
    name: "Bootstrap, responsive web design",
    icon: <FaDesktop />,
  },
  {
    name: "Node.js, Express.js",
    icon: <FaNodeJs />,
  },
  {
    name: "SQL and NoSQL databases",
    icon: <FaDatabase />,
  },
  {
    name: "React, React Native, Redux, Context API",
    icon: <FaReact />,
  },
  {
    name: "Git, Github, Version Control",
    icon: <FaGithub />,
  },
  {
    name: "RESTful API design and development",
    icon: <FaServer />,
  },
  {
    name: "AWS, Azure, Heroku, PWA",
    icon: <FaCloud />,
  },
  {
    name: "Continuous Integration and Continuous Deployment (CI/CD) tools",
    icon: <FaCodeBranch />,
  },
];

const services = [
  {
    title: "Frontend Development",
    description: (
      <>
        <p>
          Experienced in front-end development with a focus on user-friendly and
          responsive interfaces.
        </p>
        <ul>
          <li>
            Developed a React Native application for login pages, utilizing
            TypeScript and Tailwind CSS, based on Figma designs.
          </li>
          <li>
            Collaborated with design teams to ensure accurate implementation and
            adherence to UI/UX best practices.
          </li>
          <li>
            Implemented secure authentication and data validation
            functionalities to enhance user login experience.
          </li>
          <li>
            Conducted comprehensive testing and debugging to ensure reliable and
            bug-free applications.
          </li>
          <li>
            Provided valuable feedback in code reviews to improve code quality
            and maintainability.
          </li>
          <li>
            Contributed to an agile development environment, following SCRUM
            methodologies.
          </li>
          <li>
            Proficient in leveraging modern development tools, including Git for
            version control.
          </li>
          <li>
            Actively engaged in team meetings, offering ideas and solutions to
            technical challenges.
          </li>
        </ul>
      </>
    ),
    icon: <FaCode />,
  },
  {
    title: "Backend Development",
    description: (
      <>
        <p>
          Proficient in designing and implementing server-side solutions for
          robust applications.
        </p>
        <ul>
          <li>
            Developed a cross-platform mobile app using Flutter for Android and
            iOS platforms.
          </li>
          <li>
            Deployed microservices with API gateway and load balancing on Google
            Cloud Platform (GCP).
          </li>
          <li>
            Utilized Cloud Run Functions for building scalable and
            cost-effective serverless applications.
          </li>
          <li>
            Conducted comprehensive end-to-end testing using Cypress to ensure
            app quality.
          </li>
          <li>
            Collaborated on backend development using Node.js, creating RESTful
            APIs and integrating third-party services.
          </li>
          <li>
            Gained practical experience and skills in Flutter, GCP, API gateway,
            Cloud Run Functions, Cypress, and Node.js.
          </li>
        </ul>
      </>
    ),
    icon: <FaServer />,
  },
  // ... Other services ...
];

const dataportfolio = [
  {
    img: EazyMart,
    description:
      "A MERN stack web application enabling users to search, compare, and manage electronic products",
    link: "https://productstore-zmxj.onrender.com",
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
    link: "https://product-store1.netlify.app/",
    code: "https://github.com/naodhu/Products.git",
  },
  {
    img: ExpenseManager,
    description:
      "Built using React 18,The project follows best practices for modern web development, including code maintainability, scalability, and efficient performance.",
    link: "https://expense-manager-react1.netlify.app/",
    code: "https://github.com/naodhu/ExpenseManager.git",
  },
  {
    img: InvestmentCalc,
    description: "A simple investment calculator built with React 18.",
    link: "https://musical-syrniki-e46387.netlify.app/",
    code: "https://github.com/naodhu/react-investment-calculator.git",
  },
  {
    img: Nike,
    description: "UI/UX website for Nike shoes",
    link: "https://nike-clone1.netlify.app/",
    code: "https://github.com/naodhu/Nike.git",
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
