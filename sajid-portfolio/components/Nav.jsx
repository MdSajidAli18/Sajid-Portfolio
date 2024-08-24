"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "projects",
        path: "/work"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "stats",
        path: "/stats"
    },
    {
        name: "certifications",
        path: "/services"
    },
    {
        name: "contact",
        path: "/contact"
    }
];

const Nav = () => {

    const pathname = usePathname();
    
  return (
    <nav className="flex gap-16 flex-row">
      {links.map((link, index)=>{
        return(
            <Link 
                href={link.path}
                key={index} 
                className={`${link.path === pathname && "text-green-700 border-b-2 border-green-700"} capitalize font-medium text-lg hover:text-green-700 transition-all`}
            >
                {link.name}
            </Link>
        )
      })}
    </nav>
  )
}

export default Nav
