import htmllogo from "./assests/skills/Html.png";
import csslogo from "./assests/skills/Css.png";
import reactlogo from "./assests/skills/React.png";
import javascriptlogo from "./assests/skills/Javascript.png";
import bootstraplogo from "./assests/skills/Bootstrap.png";
import tailwindlogo from "./assests/skills/Tailwind.png";
import javalogo from "./assests/skills/Java.png";
import pythonlogo from "./assests/skills/Python.png";
import powerbilogo from "./assests/skills/PowerBi.png";
import tabluelogo from "./assests/skills/Tableau.png";
import awslogo from "./assests/skills/Aws.png";
import cloudlogo from "./assests/skills/Cloud.png";
import postmanlogo from "./assests/skills/Postman.png";
import mongodblogo from "./assests/skills/Mongodb.png";
import mysqllogo from "./assests/skills/Mysql.png";
import compasslogo from "./assests/skills/Compass.png";
import clogo from "./assests/skills/C.png";
import cpplogo from "./assests/skills/Cpp.png";
import nodelogo from "./assests/skills/Nodejs.png";
import netbeanslogo from "./assests/skills/NetBeans.png";
import intelijlogo from "./assests/skills/Intelij.png";
import springbootlogo from "./assests/skills/Springboot.png";
import vscodelogo from "./assests/skills/vscode.png";
import expresslogo from "./assests/skills/Express.png";
import gitlogo from "./assests/skills/Git.png";
import githublogo from "./assests/skills/Github.png";
import dockerlogo from "./assests/skills/Docker.png";
import octanetlogo from "./assests/skills/Octanet.png";
import psgenlogo from "./assests/skills/Psgen.png";
import salonlogo from "./assests/skills/Salon.png";
import iistlogo from "./assests/skills/Iist.png";
import modellogo from "./assests/skills/Model.jpg";

export const SkillsDetails = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmllogo },
      { name: "CSS", logo: csslogo },
      { name: "JavaScript", logo: javascriptlogo },
      { name: "React JS", logo: reactlogo },
      { name: "Tailwind CSS", logo: tailwindlogo },
      { name: "Bootstrap", logo: bootstraplogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootlogo },
      { name: "Node JS", logo: nodelogo },
      { name: "Express JS", logo: expresslogo },
      { name: "MySQL", logo: mysqllogo },
      { name: "MongoDB", logo: mongodblogo },
      { name: "AWS", logo: awslogo },
      { name: "Google Cloud", logo: cloudlogo },
      { name: "Docker", logo: dockerlogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: clogo },
      { name: "C++", logo: cpplogo },
      { name: "Java", logo: javalogo },
      { name: "Python", logo: pythonlogo },
      { name: "JavaScript", logo: javascriptlogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitlogo },
      { name: "GitHub", logo: githublogo },
      { name: "VS Code", logo: vscodelogo },
      { name: "Postman", logo: postmanlogo },
      { name: "Compass", logo: compasslogo },
      { name: "PowerBi", logo: powerbilogo },
      { name: "Tableau", logo: tabluelogo },
      { name: "InteliJ IDEA", logo: intelijlogo },
      { name: "Netbeans", logo: netbeanslogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: octanetlogo,
    role: "Web Developer",
    company: "OctaNet Pvt Ltd",
    date: "July 2024 - July 2024",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

export const projects = [
  {
    id: 0,
    title: "Random Password Genereator",
    description:
      "The Random Password Generator is a web-based tool that creates strong, secure, and customizable passwords using JavaScript. It allows users to select password length and character types, ensuring unique and robust password generation with an intuitive user interface.",
    image: psgenlogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Nodejs"],
    github: "https://github.com/UtkarshGanoo/PasswordGenerator",
    webapp: "https://password-generator-seven-ashy-19.vercel.app",
  },
  {
    id: 1,
    title: "Salon Web Project ",
    description:
      "A The Salon Website is a modern, responsive web application designed to showcase salon services, pricing, and booking options. It provides users with an easy way to explore services, schedule appointments, and connect with the salon for a seamless beauty experience.",
    image: salonlogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/UtkarshGanoo/Salon-web-project",
    webapp: "https://saloonwebb.netlify.app",
  },
];

export const education = [
  {
    id: 0,
    img: iistlogo,
    school: "Indore Institute Of Science & Technology,Indore",
    date: "Sept 2022 - Present",
    grade: "6.61 CGPA",
    desc: "I am Pursuing my Bachelor degree (B.Tech) in Computer Science & Engineering from RGPV University, Bhopal. During my time at IIST, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at IIST College has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachlores Of Technology(CS) - B.Tech",
  },
  {
    id: 1,
    img: modellogo,
    school: "Goverment Model Higher Secoundry School, Dewas",
    date: "Apr 2021 - March 2022",
    grade: "69.00%",
    desc: "I completed my class 12 education from Goverment Model Higher Secoundry School, Dewas, under the MP Board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "MP Board(XII) - PCM",
  },
  {
    id: 2,
    img: modellogo,
    school: "Goverment Model Higher Secoundry School, Dewas",
    date: "Apr 2019 - March 2020",
    grade: "87.5%",
    desc: "I completed my class 10 education from Goverment Model Higher Secoundry School, Dewas, under the MP Board.",
    degree: "MP Board(X)",
  },
];
