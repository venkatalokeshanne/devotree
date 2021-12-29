import { useEffect, useState } from 'react';
import Lottie from 'react-lottie'
import * as THREE from 'three';
import blogging from '../home/lottie/Blogging.json';
import Growth from '../home/lottie/Growth.json';
import Programming from '../home/lottie/Programming.json';
import CreativeAnimation from '../home/lottie/creative.json';
import Myself from './myself';
import Intro from './intro';
import NewTech from './newTech';
import Creative from './creative';
function Home() {

    const [animation, setAnimation] = useState({ animationData: blogging })
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
       })
       
       const handleScroll = () => {
           console.log("Scroll top",  window.scrollY)
           if(window.scrollY < 100) {
           setAnimation({ animationData: blogging });
           window.removeEventListener('scroll', handleScroll);
        } else if(window.scrollY >= 300 && window.scrollY <= 400) {
            setAnimation({ animationData: Growth });
            window.removeEventListener('scroll', handleScroll);
        } else if(window.scrollY >= 600 && window.scrollY <= 900) {
            setAnimation({ animationData: Programming });
            window.removeEventListener('scroll', handleScroll);
        } else if(window.scrollY >= 900 ) {
            setAnimation({ animationData: CreativeAnimation });
            window.removeEventListener('scroll', handleScroll);
        } 
        else {
            window.removeEventListener('scroll', handleScroll);
            window.addEventListener('scroll', handleScroll);
        }
        
      }

    return (
        <div className='screenW flex'>
            <div className='fixed hidden animation w-100 md:w-2/5 md:block' data-aos="fade-right" data-aos-duration="2000">
                <Lottie  options={animation} ></Lottie>
            </div>
            <div className='scrollable flex'>
                <div className='md:w-2/5'>text</div>
                <div className='md:w-3/5'>
                <Myself />
                <Intro />
                <NewTech />
                <Creative /></div>
            </div>
        </div>
    )
}

export default Home;