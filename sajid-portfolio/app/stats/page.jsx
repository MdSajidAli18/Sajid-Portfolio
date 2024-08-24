"use client"

import '@fortawesome/fontawesome-free/css/all.min.css'


const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-8 xl:pb-0">
          <div className="container mx-auto flex-row gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

            <div className="mt-4">
              <a href="https://github.com/MdSajidAli18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <h1 className="text-green-700 text-3xl font-semibold cursor-pointer">GitHub</h1>
                <i className="fas fa-external-link-alt text-2xl text-green-700"></i>
              </a>
              <ul className="list-disc list-inside ml-5">
                <li className="text-slate-800 text-lg font-semibold">14 Repositories</li>
                <li className="text-slate-800 text-lg font-semibold">10 Projects</li>
                <li className="text-slate-800 text-lg font-semibold">400+ commits</li>
              </ul>
            </div>

            <div className="mt-5">
              <a href="https://leetcode.com/u/MdSajidAli/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <h1 className="text-green-700 text-3xl font-semibold cursor-pointer">Leetcode</h1>
                <i className="fas fa-external-link-alt text-2xl text-green-700"></i>
              </a>
              <ul className="list-disc list-inside ml-5">
                <li className="text-slate-800 text-lg font-semibold">Solved 30+ problems</li>
              </ul>
            </div>

            <div className="mt-5">
              <a href="https://www.naukri.com/code360/profile/codestudio63" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <h1 className="text-green-700 text-3xl font-semibold cursor-pointer">CodeStudio</h1>
                <i className="fas fa-external-link-alt text-2xl text-green-700"></i>
              </a>
              <ul className="list-disc list-inside ml-5">
                <li className="text-slate-800 text-lg font-semibold">Solved 60+ problems</li>
              </ul>
            </div>

            <div className="mt-5">
              <a href="https://www.geeksforgeeks.org/user/weenwee20bw/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <h1 className="text-green-700 text-3xl font-semibold cursor-pointer">GFG</h1>
                <i className="fas fa-external-link-alt text-2xl text-green-700"></i>
              </a>
              <ul className="list-disc list-inside ml-5">
                <li className="text-slate-800 text-lg font-semibold">Solved 10+ problems</li>
              </ul>
            </div>


          </div>

            
        </section>
    )
}

export default Stats
