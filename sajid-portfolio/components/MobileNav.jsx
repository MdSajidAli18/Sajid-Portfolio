"use client"


import { usePathname } from 'next/navigation'
import { useState } from 'react'; // Import useState for state management
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {CiMenuFries} from "react-icons/ci"
import Link from 'next/link'

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


const MobileNav = () => {

    const pathname = usePathname();


    const [isOpen, setIsOpen] = useState(false); // State to manage sheet visibility
    const handleLinkClick = () => {
        setIsOpen(false); // Close the sheet when a link is clicked
    };


    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>

            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-green-700'/>
            </SheetTrigger>

            <SheetContent className="flex flex-col bg-white">

                {/* logo */}
                <div className='mt-24 mb-24 text-center text-2xl'>
                    <Link href="/" onClick={handleLinkClick}>
                        <h1 className='text-4xl font-semibold text-green-700'>
                            Sajid<span className='text-green-700'>.</span>
                        </h1>
                    </Link>
                </div>

                {/* nav */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index)=>{
                        return(
                            <Link
                                href={link.path}
                                key={index}
                                onClick={handleLinkClick} // Close the sheet on link click
                                className={`${link.path === pathname && "text-green-700 border-b-2 border-green-700"} text-xl capitalize text-black hover:text-green-700 transition-all`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>

            </SheetContent>

        </Sheet>
    )
}

export default MobileNav
