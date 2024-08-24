"use client"

import { BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"
import {motion} from 'framer-motion'


const services = [
  {
    num:'01',
    title: 'NPTEL Online Certification - Introduction to Internet of Things',
    institution: 'IIT Kharagpur, Jan-Apr 2024',
    description: 'Successfully completed a comprehensive course on the Internet of Things, offered by IIT Kharagpur and funded by the Ministry of Education, Government of India. Achieved a consolidated score of 76%, demonstrating a strong understanding of IoT concepts and applications.',
    href: "https://drive.google.com/file/d/1hIp_TbxBHaxqeBd0TDcQ4sf64vKaSdj7/view?usp=sharing"
  },
  {
    num:'02',
    title: 'NPTEL Online Certification - The Joy of Computing using Python',
    institution: 'IIT Madras, Jan-Apr 2023',
    description: 'Successfully completed a comprehensive course on the Python, offered by IIT Madras and funded by the Ministry of Education, Government of India. Achieved a consolidated score of 71%, demonstrating a strong understanding of Python concepts and applications.',
    href: "https://drive.google.com/file/d/1YQ92EhdhLdLSlgr_so6WJUXz3zA0Yr9K/view?usp=sharing"
  },
  {
    num:'03',
    institution: 'IIT Kharagpur, Jul-sep 2024',
    title: 'NPTEL Online Certification - Cloud Computing',
    description: 'Ongoing...',
    href: ""
  },
  {
    num:'04',
    title: 'NPTEL Online Certification - Introduction to Industry 4.0 and Industrial Internet of Things',
    institution: 'IIT Kharagpur, Jul-sep 2024',
    description: 'Ongoing...',
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
              <div key={index} className="flex-1 flex flex-col justify-center gap-8 group mt-6 ml-8">

                {/* top */}
                <div className="w-full flex justify-between items-center">

                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>

                  <Link 
                    href={service.href}
                    className="w-[100px] h-[50px] rounded-xl bg-white border-2 group-hover:border-green-800 border-slate-800 transition-all duration-500 flex justify-center items-center"
                  >
                    {/* <BsArrowDownRight className="text-green-700 hover:text-white text-2xl"/> */}
                    <p className="text-slate-800 hover:text-green-800 text-sm flex justify-center items-center p-2">View Certificate</p>
                  </Link>

                </div>

                {/* title */}
                <h2 className="text-[30px] font-bold leading-none text-slate-700 group-hover:text-green-700 transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-slate-800 text-xl">{service.institution}</p>

                {/* description */}
                <p className="text-slate-800">{service.description}</p>

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
