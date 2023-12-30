import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gotParisImg from "@/public/got_paris.png";
import trophyImg from "@/public/trophy.png";
import sketchImg from "@/public/sketch.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title: "Graduated From Phoenix Country Day School",
  //   location: "Phoenix, AZ",
  //   description:
  //     "Discovered my passion for coding through making interactive art, where I learned to see technology as a canvas for creativity and innovation.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2021",
  // },
  {
    title: "Robotics Programming Instructor (Summer)",
    location: "Paradise Valley, Arizona",
    description:
      "Directed a team of 5 to teach 30 students about foundational physical coding principals.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2021",
  },
  {
    title: "Data Administrator (Summer)",
    location: "Paradise Valley, AZ",
    description:
      "Coordinated team of 6 in an administrative project compiling thousands of campers datapoints to streamline camp operations.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "New York University - Computer Science & Philosophy",
    location: "New York, NY",
    description:
      "Majoring in Computer Science with a minor in Philosophy at NYU, I apply philosophical thinking to innovate in coding, offering fresh perspectives in problem-solving.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Graphing from Paris to Westeros",
    description:
      "Dynamic visualizations of the Paris subway system and character networks in Game of Thrones",
    tags: ["Python", "numpy", "pandas", "NetworkX", "Matplotlib"],
    imageUrl: gotParisImg,
  },
  {
    title: "RankMaster",
    description:
      "Sleek C-based application tailored to curate and manage your personal top 10 lists",
    tags: ["C", "File I/O"],
    imageUrl: trophyImg,
  },
  {
    title: "Etch-a-Sketch",
    description:
      "Web app built w/o external frameworks, giving users a platform to create whatever their heart desires",
    tags: ["Javascript", "CSS", "HTML"],
    imageUrl: sketchImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "Java",
  "Python",
  "C",
  "HTML",
  "CSS",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Bash",
  "Assembly",
  "numpy",
  "pandas",
  "NetworkX",
  "Matplotlib",
  "Scikit-Learn",
  "torch",
  "p5.js",
  "Processing",

] as const;
