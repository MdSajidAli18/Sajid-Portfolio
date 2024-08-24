"use client"

import {motion} from "framer-motion"
import React, {useState} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {BsArrowUpRight, BsGithub} from "react-icons/bs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"

import WorkSliderBtns from "@/components/WorkSliderBtns"



const projects = [
  {
    num: "01",
    category: "Full Stack Project",
    title: "project 1",
    description: "Developed a responsive e-commerce platform, Ecomaxx, using the MERN stack (MongoDB, Express.js, React, Node.js), featuring product management, secure user authentication, a dynamic shopping cart, and order management. Integrated an admin panel with exclusive access for administrators, allowing for product upload/edit and user details tracking, using Cloudinary for image uploads.",
    stack: [{name: "MongoDB"}, {name: "Express.js"}, {name: "React.js"}, {name: "Node.js"}],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/MdSajidAli18/E-commerce"
  },
  {
    num: "02",
    category: "Threads App Clone",
    title: "project 2",
    description: " Developed a full-stack messaging app using MERN stack, Next.js, and TypeScript, featuring CRUD operations, user authentication/authorization with Clerk, and deployment on Vercel. Enabled users to share photos, videos, messages, and Stories with their close friends list on Instagram.",
    stack: [{name: "MERN Stack"}, {name: "Next.js"}, {name: "Typescript"}],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/MdSajidAli18/threads"
  },
  {
    num: "03",
    category: "React Responsive Gym Website",
    title: "project 3",
    description: "In this ReactJS project, I developed an impressive, responsive gym website. I utilized React hooks, modern CSS, Framer Motion, and a number counter, among other tools. To enhance its functionality, I integrated the EmailJS library for contact features.",
    stack: [{name: "React.js"}, {name: "Tailwind.css"}, {name: "EmailJS"}],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/MdSajidAli18/GymWebsite"
  }
]


const Work = () => {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper)=>{
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  }


  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">

          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">

              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-green-700 group-hover:text-black transition-all duration-500 capitalize">
                {project.category}
              </h2>

              {/* project description */}
              <p className="text-slate-700">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return(
                    <li key={index} className="text-xl text-green-700">
                      {item.name}

                      {/* remove the last comma */}
                      {index !== project.stack.length-1 && ","}
                    </li>

                  )
                })}
              </ul>

              {/* border */}
              <div className="border border-slate-500"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">

                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>

                      <TooltipTrigger className="w-[60px] h-[60px] border-2 border-green-700 rounded-full bg-white hover:bg-green-700 flex justify-center items-center group">
                        <BsArrowUpRight className="text-green-700 text-3xl group-hover:text-white"/>
                      </TooltipTrigger>
                      <p className="text-slate-800">Live project</p>

                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>

                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>

                      <TooltipTrigger className="w-[60px] h-[60px] border-2 border-green-700 rounded-full bg-white hover:bg-green-700 flex justify-center items-center group">
                        <BsGithub className="text-green-700 text-3xl group-hover:text-white"/>
                      </TooltipTrigger>
                      <p className="text-slate-800">Github repository</p>

                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>

                    </Tooltip>
                  </TooltipProvider>
                </Link>
                
              </div>

            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12" 
            >
              {projects.map((projectt, index)=>{
                return(
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">
                        
                      </div>

                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}

              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-green-700 hover:bg-green-800 text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />

            </Swiper>
          </div>

        </div>
      </div>

    </motion.section>
  )
}

export default Work
