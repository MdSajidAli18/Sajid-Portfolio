"use client"


import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs, SiTypescript} from "react-icons/si"

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import {ScrollArea} from "@/components/ui/scroll-area"
import {motion} from "framer-motion"



// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "As a final-year student pursuing my Bachelor's degree in ECE, I'm excited to take the first step in my career journey. Although I don't have direct work experience, I've developed a strong foundation in full-stack development through personal projects and several frontend projects. These projects have taught me the value of problem-solving, adaptability, and collaboration. I'm eager to bring my skills, enthusiasm, and strong work ethic to a dynamic team and contribute to innovative projects. I'm looking forward to learning from experienced professionals and continuing to grow as a developer.",
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
  description: "I am currently pursuing a B.Tech in Electronics and Communication Engineering at Tezpur University, Assam, with an expected graduation in 2025. I have maintained a CGPA of 7.08 throughout my studies, building a strong foundation in both theoretical and practical aspects of the field.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "C Programming Language",
      duration: "2022"
    },
    {
      institution: "Online Course Platform",
      degree: "C++ Programming Language",
      duration: "2022"
    },
    {
      institution: "Online Course",
      degree: "Data Structures and Algorithms",
      duration: "From 2022 onwards"
    },
    {
      institution: "Online Course",
      degree: "Frontend Web Dev(Javascript, React.js)",
      duration: "2023"
    },
    {
      institution: "Online course",
      degree: "Backend Development(MERN stack)",
      duration: "From 2023 onwards"
    }
  ]
}


// skills data
const skills = {
  title: "My skills",
  description: "As an Electronics and Communication Engineering student, I have developed strong skills in C, C++, Python, JavaScript, and TypeScript. My coursework in Data Structures, Operating Systems, and Embedded System Design has deepened my technical knowledge. Additionally, I have hands-on experience with web technologies like ReactJS, NodeJS,ExpressJS and MongoDB, and I am proficient in tools like VS Code, Jupyter Notebook and MS Office.",
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


// about data
const about = {
  title: "About me",
  description: "Hello! I'm Md Sajid Ali, a final-year Electronics and Communication Engineering (ECE) student and a passionate Full Stack MERN developer. Skilled in JavaScript, React, Next.js, TypeScript, and MongoDB, I love exploring new technologies and building full-stack projects. My interests include Web Development and Data Structures & Algorithms (DSA). Check out my projects to see what I've been working on!",
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
      fieldValue: "Fresher"
    },
    {
      fieldName: "Email",
      fieldValue: "mdsajidali1803@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi"
    }
  ]
}



const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] mt-10"
        >
          <TabsList
            className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>

          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full bg-slate-50 shadow rounded-lg px-8 pt-4">

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-green-700">{experience.title}</h3>
                <p className="max-w-[600px] text-slate-800 mx-auto xl:mx-0">{experience.description}</p>
                {/* <ScrollArea className="h-[400px] pr-3">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=>{
                      return(
                        <li 
                          key={index}
                          className="bg-green-700 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-white">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center text-white lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            
                            <span className="w-[6px] h-[6px] rounded-full bg-white"></span>
                            <p className="text-white">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
                */}

                {/* <p className="text-slate-800">As a final-year student pursuing my Bachelor's degree in ECE, I'm excited to take the first step in my career journey. Although I don't have direct work experience, I've developed a strong foundation in full-stack development through personal projects and several frontend projects. These projects have taught me the value of problem-solving, adaptability, and collaboration. I'm eager to bring my skills, enthusiasm, and strong work ethic to a dynamic team and contribute to innovative projects. I'm looking forward to learning from experienced professionals and continuing to grow as a developer.</p> */}
              </div>
            </TabsContent>


            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-green-700">{education.title}</h3>
                <p className="max-w-[600px] text-slate-800 mx-auto xl:mx-0">{education.description}<br/><p className="mt-3">Below, I have mentioned additional education.</p></p>
                <ScrollArea className="h-[400px] pr-3">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=>{
                      return(
                        <li 
                          key={index}
                          className="bg-green-700 border h-[200px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-white">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-white text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-white mt-2"></span>
                            <p className="text-white mt-2">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-green-700">{skills.title}</h3>
                  <p className="max-w-[600px] text-slate-800 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                {/* <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=>{
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>

                            <TooltipTrigger className="w-[60px] h-[60px] bg-green-700 hover:bg-white text-white border border-green-700 rounded-xl flex justify-center items-center group">
                              <div className="text-3xl group-hover:text-green-700 group-hover:bg-white transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>

                            <TooltipContent className="bg-green-700 border border-white">
                              <p className="capitalize text-white">{skill.name}</p>
                            </TooltipContent>

                          </Tooltip>
                        </TooltipProvider>
                        
                      </li>
                    )
                  })}
                </ul> */}

                <h1 className="text-green-700 text-3xl">1. Coursework:</h1>
                {/* <p className="text-slate-800">Data Structures and Algorithms (DSA), Internet of Things(IoT), Computer Network, Network Security, Cloud Computing, OOPs,  Operating Systems</p> */}
                <ul className="list-disc list-inside text-slate-800">
                  <li>Data Structures and Algorithms (DSA)</li>
                  <li>Internet of Things (IoT)</li>
                  <li>Computer Network</li>
                  <li>Network Security</li>
                  <li>Cloud Computing</li>
                  <li>Object-Oriented Programming (OOP)</li>
                  <li>Operating Systems</li>
                </ul>

                <h1 className="text-green-700 text-3xl">2. Programming Languages:</h1>
                <ul className="list-disc list-inside text-slate-800">
                  <li>C</li>
                  <li>C++</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>SQL</li>
                </ul>

                <h1 className="text-green-700 text-3xl">3. Technologies & Frameworks:</h1>
                <ul className="list-disc list-inside text-slate-800">
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>ReactJS</li>
                  <li>NodeJS</li>
                  <li>NextJS</li>
                  <li>Appwrite</li>
                  <li>Bootstrap</li>
                  <li>Vite</li>
                  <li>TailwindCSS</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                </ul>

                <h1 className="text-green-700 text-3xl">4. Developer Tools:</h1>
                <ul className="list-disc list-inside text-slate-800">
                  <li>VS Code</li>
                  <li>Jupyter Notebook</li>
                  <li>MS Office</li>
                </ul>


              </div>
            </TabsContent>


            {/* about */}
            <TabsContent value="about" className="w-full rounded-lg px-6 pt-4 border-blue-400 text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-green-700">{about.title}</h3>
                <p className="max-w-[600px] text-slate-800 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=>{
                    return(
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-green-700">{item.fieldName}</span>
                        <span className="text-xl text-slate-800">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div> 
            </TabsContent>

          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
