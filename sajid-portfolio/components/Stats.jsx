// "use client"

// import CountUp from "react-countup"

// import '@fortawesome/fontawesome-free/css/all.min.css'


// const statss = [
//     {
//         num: 0,
//         text: "Years of experience"
//     },
//     {
//         num: 10,
//         text: "Projects completed"
//     },
//     {
//         num: 10,
//         text: "Technologies mastered"
//     },
//     {
//         num: 400,
//         text: "Code commits"
//     }
// ]


// const Stats = () => {
//     return (
//         <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
//             <div className="container mx-auto">
//                 <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
//                     {statss.map((item, index)=>{
//                         return(
//                             <div 
//                                 key={index}
//                                 className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
//                             >   
//                                 <CountUp
//                                     end={item.num}
//                                     duration={5}
//                                     delay={2}
//                                     className="text-4xl xl:text-6xl font-extrabold text-slate-800"
//                                 />
//                                 <p
//                                     className={`${
//                                         item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]" 
//                                     } leading-snug text-green-700`} 
//                                 >
//                                     {item.text}
//                                 </p>
//                             </div>
//                         )
//                     })}
//                 </div>


//                 <div className="mt-4">
//                     <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
//                         <h1 className="text-green-700 text-3xl font-semibold cursor-pointer">GitHub</h1>
//                         <i className="fas fa-external-link-alt text-2xl text-green-700"></i>
//                     </a>
//                     <ul className="list-disc list-inside ml-5">
//                         <li className="text-slate-800 text-lg">14 Repositories</li>
//                         <li className="text-slate-800 text-lg">10 Projects</li>
//                         <li className="text-slate-800 text-lg">400+ commits</li>
//                     </ul>
//                 </div>

//                 <div className="mt-5">
//                     <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
//                         <h1 className="text-green-700 text-3xl font-semibold cursor-pointer">Leetcode</h1>
//                         <i className="fas fa-external-link-alt text-2xl text-green-700"></i>
//                     </a>
//                     <ul className="list-disc list-inside ml-5">
//                         <li className="text-slate-800 text-lg">Solved 30+ problems</li>
//                     </ul>
//                 </div>

//                 <div className="mt-5">
//                     <a href="https://www.codingninjas.com/codestudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
//                         <h1 className="text-green-700 text-3xl font-semibold cursor-pointer">CodeStudio</h1>
//                         <i className="fas fa-external-link-alt text-2xl text-green-700"></i>
//                     </a>
//                     <ul className="list-disc list-inside ml-5">
//                         <li className="text-slate-800 text-lg">Solved 60+ problems</li>
//                     </ul>
//                 </div>

//                 <div className="mt-5">
//                     <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
//                         <h1 className="text-green-700 text-3xl font-semibold cursor-pointer">GFG</h1>
//                         <i className="fas fa-external-link-alt text-2xl text-green-700"></i>
//                     </a>
//                     <ul className="list-disc list-inside ml-5">
//                         <li className="text-slate-800 text-lg">Solved 10+ problems</li>
//                     </ul>
//                 </div>


//             </div>

            
//         </section>
//     )
// }

// export default Stats
