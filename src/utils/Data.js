import {
  BsCodeSlash,
  BsLayoutSidebarInset,
  BsCloudCheckFill,
} from "react-icons/bs";

import { RiToolsFill } from "react-icons/ri";
import { ImDatabase } from "react-icons/im";
import { FaReact } from "react-icons/fa";

const Skils = [
  {
    name: "Language",
    icon: BsCodeSlash,
    stack: "JavaScript, TypeScript, python, C#, Java",
  },
  {
    name: "Libraries and Frameworks",
    icon: FaReact,
    stack: "ReactJS, NextJs, NodeJS, ExpressJs, Nestjs",
  },
  {
    name: "Database",
    icon: ImDatabase,
    stack: "MongoDB, MySQL, PostgreSQL",
  },
  {
    name: "Development Tools",
    icon: RiToolsFill,
    stack:
      "Git, Github, Firebase, Jira, Trello, Microsoft Teams, Slack, Discord",
  },
  {
    name: "Cloud service",
    icon: BsCloudCheckFill,
    stack: "Azure, Heroku",
  },
  {
    name: "Others",
    icon: BsLayoutSidebarInset,
    stack: "Visual Studio Code, Visual Studio, JetBrains Web Storm M",
  },
];

const Project = [
  {
    title: "Cubenation - store",
    image: "/projects/cn.jpg",
    description:
      "An E-commerce solution build with Nextjs, ReactJS(for backoffice/admin panel) Nodejs, ExpressJs & mongoDB",
    link: "https://cubenationshop.com/",
  },
  {
    title: "Auth api with NestJs",
    image: "/projects/auth-next.png",
    description: "A basic authentication system build with nestjs.",
    link: "https://github.com/Siam456/nestjs_mysql_auth_service",
  },
  {
    title: "Mail Service Nodejs",
    image: "/projects/mail-node.png",
    description: "A Mail micro service build with Expressjs & Nodejs",
    link: "https://github.com/Siam456/mail_service",
  },
];
const EduInfo = [
  {
    title: "Bachelor of Science in Computer Science and Engineering",
    duration: "jan, 2018 - jan, 2022",
    name: "Daffodil International University",
  },
  {
    title: "Higher Secondary School Certificate",
    duration: "2014 - 2016",
    name: "Govt Yasin College",
  },
  {
    title: "Secondary School Certificate",
    duration: "2008 - 2014",
    name: "BZM Govt High School",
  },
];

export { Skils, Project, EduInfo };
