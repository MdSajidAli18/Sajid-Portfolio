"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs, SiTypescript} from "react-icons/si"


// about data
const about = {
  title: "About me",
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Md Sajid Ali"
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 8541 8827 04"
    },
    {
      fieldName: "Experience",
      fieldValue: "0 Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "mdsajidali1803@gmail.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi"
    }
  ]
}


// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present"
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021"
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021"
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020"
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019"
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017 - 2018"
    }
  ]
}


// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023"
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022"
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021"
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019"
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016 - 2018"
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016"
    }
  ]
}


// skills data
const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "html 5"
    },
    {
      icon: <FaCss3/>,
      name: "css 3"
    },
    {
      icon: <FaJs/>,
      name: "javascript"
    },
    {
      icon: <FaReact/>,
      name: "react.js"
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css"
    },
    {
      icon: <FaNodeJs/>,
      name: "node.js"
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js"
    },
    {
      icon: <SiTypescript/>,
      name: "typescript"
    }
  ]
}


const Resume = () => {
  return (
    <div>
      Resume page
    </div>
  )
}

export default Resume
