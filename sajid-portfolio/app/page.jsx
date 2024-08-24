import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {

  return (
    <section className="h-full">
      
      <div className="container mx-auto h-full">

        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-14 xl:pb-24 gap-10">

          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-black">Software Engineer</span>
            <h1 className="h1 mb-6 text-green-700">Hello, I'm <br/> <span className="text-green-700">Md Sajid Ali</span></h1>
            <p className="max-w-[500px] mb-9 text-slate-800">
            a final-year ECE student and passionate Full Stack MERN developer. I love exploring new technologies and building full-stack projects. Also, I'm proficient in Data Structures and Algorithms.
            </p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="https://drive.google.com/file/d/1kuo9dMLqG3nuHtGgFOY3kaduONp9-1Bp/view?usp=sharing" // Replace with your actual file URL or ID
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 border-2 border-green-700 text-green-700 hover:text-white hover:bg-green-700"
                >
                  <span>Resume</span>
                  <FiDownload className="text-xl hover:text-white"/>
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border-2 border-green-700 rounded-full flex justify-center items-center text-green-700 hover:text-white text-base hover:bg-green-700 hover:transition-all duration-500"
                />
              </div>

            </div>
          </div>

          {/* photo */}
          {/* <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div> */}

          <div className="h-auto w-full max-w-[90%] md:max-w-[75%] lg:max-w-[60%] xl:max-w-[50%] rounded-lg flex justify-center items-center p-6 md:p-8 lg:p-10 mb-8 mt-6 xl:mb-0 border-2 border-green-700 shadow-lg mx-auto">
            <h1 className="text-slate-700 font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[GreatVibes] italic tracking-tight text-center">
              Welcome to my portfolio!<br/>
              <span className="text-2xl md:text-3xl lg:text-4xl text-green-700">I hope you are doing well.</span>
            </h1>
          </div>






        </div>
      </div>

      {/* stats */}
      {/* <Stats/> */}

    </section>
  )
}

export default Home