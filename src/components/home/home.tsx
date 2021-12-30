import { useEffect, useState } from 'react';
import Lottie from 'react-lottie'
import * as THREE from 'three';
import blogging from '../home/lottie/Blogging.json';
import Growth from '../home/lottie/Growth.json';
import Programming from '../home/lottie/programming.json';
import CreativeAnimation from '../home/lottie/creative.json';
import CoffeeTime from '../home/lottie/coffee_time.json';
import Social from '../home/lottie/social.json';
import Smile from '../home/lottie/smile.json';
import Mail from '../home/lottie/mail.json';
import HardWork from '../home/lottie/hardwork.json';
import Myself from './myself';
import Intro from './intro';
import NewTech from './newTech';
import Creative from './creative';
import Game from './game';
import FollowMe from './followme';
import ContactMe from './contactMe';
import MadeWith from './madeWith';
import Thankyou from './thankyou';
function Home() {
    const blogger = { animationData: blogging };
    const [animation, setAnimation] = useState(null)
    useEffect(() => {
        // setAnimation({ animationData: blogging });
        window.addEventListener('scroll', handleScroll);
    })

    const handleScroll = () => {
        console.log("Scroll top", window.scrollY)
        if (window.scrollY < 100) {
            setAnimation({ animationData: blogging });
            window.removeEventListener('scroll', handleScroll);
        } else if (window.scrollY >= 500 && window.scrollY <= 1000) {
            setAnimation({ animationData: Growth });
            window.removeEventListener('scroll', handleScroll);
        } else if (window.scrollY >= 1000 && window.scrollY <= 1600) {
            setAnimation({ animationData: Programming });
            window.removeEventListener('scroll', handleScroll);
        } else if (window.scrollY >= 1600 && window.scrollY <= 2000) {
            setAnimation({ animationData: CreativeAnimation });
            window.removeEventListener('scroll', handleScroll);
        } else if (window.scrollY >= 2000 && window.scrollY <= 2600) {
            setAnimation({ animationData: CoffeeTime });
            window.removeEventListener('scroll', handleScroll);
        } else if (window.scrollY >= 2600 && window.scrollY <= 3200) {
            setAnimation({ animationData: HardWork });
            window.removeEventListener('scroll', handleScroll);
        } else if (window.scrollY >= 3200 && window.scrollY <= 3800) {
            setAnimation({ animationData: Social });
            window.removeEventListener('scroll', handleScroll);
        } else if (window.scrollY >= 3800 && window.scrollY <= 4800) {
            setAnimation({ animationData: Mail });
            window.removeEventListener('scroll', handleScroll);
        } else if (window.scrollY >= 4200 ) {
            setAnimation({ animationData: Smile });
            window.removeEventListener('scroll', handleScroll);
        }

        else {
            window.removeEventListener('scroll', handleScroll);
            window.addEventListener('scroll', handleScroll);
        }

    }

    return (
        <div className='screenW flex'>
            <div className='fixed hidden animation w-100 md:w-4/12 md:block' data-aos="fade-right" data-aos-duration="2000">
                <Lottie options={animation === null ? blogger : animation} ></Lottie>
            </div>
            <div className='scrollable mt-52 flex overflow-hidden md:overflow-scroll mx-5'>
                <div className='md:w-4/12 hidden md:block'>text</div>
                <div className='md:w-8/12'>
                    <Myself />
                    <Intro />
                    <NewTech />
                    <Creative />
                    <Game />
                    <MadeWith />
                    <FollowMe />
                    <ContactMe />
                    <Thankyou />
                </div>
            </div>
        </div>
    )
}

export default Home;