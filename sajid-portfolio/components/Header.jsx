import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
  return (
    <header className="py-4 xl:py-6 text-black bg-white border-b border-slate-300 flex justify-between">

        <div className="container mx-auto flex justify-between items-center">

            {/* logo */}
            <Link href="/">
                <h1 className="text-5xl font-extrabold relative">
                    <span className="text-green-700 font-[GreatVibes] italic tracking-tight">
                        Sajid
                    </span>
                </h1>
            </Link>

            {/* desktop nav & 'hire me' button*/}
            <div className="hidden xl:flex items-center gap-12 px-20 ml-10">
                <Nav/>
            </div>
            <Link href="/contact">
                <Button className="hidden xl:flex bg-white text-green-700 hover:bg-green-700 hover:text-white border-2 border-green-700 mr-0 ml-10">Work together</Button>
            </Link>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav/>
            </div>

        </div>

    </header>
  )
}

export default Header
