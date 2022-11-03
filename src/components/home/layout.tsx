import Link from "next/link";
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react";
import { useRouter } from 'next/router'

function Layout() {
    const { t, i18n } = useTranslation()
    const router = useRouter()
    const [openMenuMobile, setOpenMenuMobile] = useState('close')
   
    function openMenu()  {
        console.log('openMenuMobile', openMenuMobile)
        openMenuMobile === 'open' ? setOpenMenuMobile('close') : setOpenMenuMobile('open')
    }

    return (
        <><div className="flex text-white h-20 items-center justify-center fixed w-full color-light-black">
            <div className="md:w-6/12 text-3xl hover:text-purple-700">
                <Link href='/' locale={router.locale === 'en' ? 'fr' : 'en'}>
                    <button>
                        {router.locale}
                    </button>
                </Link>
                <div>
                </div>
            </div>

            <button className="block md:hidden absolute right-8" onClick={() => openMenu()}>
                { openMenuMobile === 'close' && <><span className="dot"></span><span className="dot"></span><span className="dot"></span></> }
                {openMenuMobile === 'open' && <span className="text-white text-4xl">✕</span>}
            </button>

            <div className="hidden md:block">
                <h2 className="inline-block mr-10 hover:text-purple-700" onClick={() => openMenu()}><Link href="/">.is()</Link></h2>
                <h2 className="inline-block mr-10 hover:text-purple-700" onClick={() => openMenu()}><Link href="/work">.work()</Link></h2>
                <h2 className="inline-block mr-10 hover:text-purple-700" onClick={() => openMenu()}><Link href="/about">.about()</Link></h2>
                <h2 className="inline-block mr-10 hover:text-purple-700" onClick={() => openMenu()}><Link href="/#contact">.contact()</Link></h2>
                <a className="inline-block" href='https://www.linkedin.com/in/venkatalokesh/' target='_blank'> <FontAwesomeIcon icon={faLinkedin} className="mr-2" style={{ color: "white", height: "2rem", width: "2rem" }} /></a>
                <a className="inline-block" href='https://github.com/venkatalokeshanne' target='_blank'> <FontAwesomeIcon icon={faGithub} className='hover:' style={{ color: "white", height: "2rem", width: "2rem" }} /></a>

            </div>
        </div>
        {openMenuMobile === 'open' && 
        <div className="fixed md:hidden  bottom-0 right-0 flex-col flex justify-center items-end menu-mobile w-full" data-aos="fade-right" data-aos-duration="2000">
        <h2 className=" mr-10 hover:text-purple-700 text-4xl mb-5"><Link href="/">.is()</Link></h2>
                <h2 className="text-4xl mr-10 mb-5 hover:text-purple-700"><Link href="/work">.work()</Link></h2>
                <h2 className="text-4xl mr-10 hover:text-purple-700 mb-5"><Link href="/about">.about()</Link></h2>
                <h2 className="text-4xl mr-10 hover:text-purple-700 mb-5"><Link href="/#contact">.contact()</Link></h2>
                <div className="mr-10">
                <a href='https://www.linkedin.com/in/venkatalokesh/' target='_blank'> <FontAwesomeIcon icon={faLinkedin} className="mr-2" style={{ color: "white", height: "2rem", width: "2rem" }} /></a>
                <a href='https://github.com/venkatalokeshanne' target='_blank'> <FontAwesomeIcon icon={faGithub} className='hover:' style={{ color: "white", height: "2rem", width: "2rem" }} /></a></div>
            </div> }
            </>
    )
}

export default Layout;
