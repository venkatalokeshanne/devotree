import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react";

function Layout() {


    return (
        <div className="hidden md:flex text-white h-20 items-center justify-center fixed w-full color-light-black">
            <div className="w-6/12">
            <h2 className="inline-block mr-10"><Link href='/'>.is()</Link></h2>
            </div>

            <div>
                <h2 className="inline-block mr-10 hover:text-purple-700"><Link href="/">.is()</Link></h2>
                <h2 className="inline-block mr-10 hover:text-purple-700"><Link href="/work">.work()</Link></h2>
                <h2 className="inline-block mr-10 hover:text-purple-700"><Link href="/about">.about()</Link></h2>
                <h2 className="inline-block mr-10 hover:text-purple-700"><Link href="/#contact">.contact()</Link></h2>
                <a className="inline-block" href='https://www.linkedin.com/in/avlokesh8/' target='_blank'> <FontAwesomeIcon icon={faLinkedin} className="mr-2" style={{color: "white", height: "2rem", width: "2rem"}}/></a>
                <a className="inline-block" href='https://github.com/venkatalokeshanne' target='_blank'> <FontAwesomeIcon icon={faGithub} className='hover:' style={{color: "white", height: "2rem", width: "2rem"}}/></a>
            
            </div>
        </div>
    )
}

export default Layout;