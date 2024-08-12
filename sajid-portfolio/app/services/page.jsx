"use client"

import { BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"
import {motion} from 'framer-motion'


const services = [
  {
    num:'01',
    title: 'Web Development',
    description: 'Welcome to my portfolio! I’m a passionate full-stack developer with a strong command of both front-end and back-end technologies. Here, you’ll find a showcase of my projects, skills, and experience, demonstrating my ability to build dynamic, responsive, and scalable applications. I specialize in delivering end-to-end solutions that are efficient, secure, and user-friendly. Explore my work and see how I can help bring your ideas to life.',
    href: ""
  },
  {
    num:'02',
    title: 'UI/UX Desing',
    description: 'Welcome to my portfolio! I’m a passionate UI/UX designer with a keen eye for detail and a deep understanding of user-centered design. Here, you’ll find a showcase of my projects, skills, and experience, demonstrating my ability to create intuitive, aesthetically pleasing, and user-friendly interfaces. I specialize in crafting seamless experiences that are both visually engaging and functionally efficient. Explore my work and see how I can help bring your ideas to life with thoughtful design.',
    href: ""
  },
  {
    num:'03',
    title: 'Logo Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    href: ""
  },
  {
    num:'04',
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    href: ""
  }
]


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index)=>{
            return(
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">

                {/* top */}
                <div className="w-full flex justify-between items-center">

                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>

                  <Link 
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-2xl"/>
                  </Link>

                </div>

                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                {/* description */}
                <p className="text-white/60">{service.description}</p>

                {/* border */}
                <div className=" border-b border-white/20 w-full"></div>

              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
