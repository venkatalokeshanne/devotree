import { useEffect } from 'react';
import Lottie from 'react-lottie'
import * as THREE from 'three';
import blogging from './lottie/Blogging.json';
function Intro() {

    return (
        <div className='mx-auto w-3/5' id="testing2">
            <h2 className='purple'>I am, Je suis, Yo soy 😎</h2>
            <p className='text-gray-400' data-aos="fade-right" data-aos-duration="2000">JavaScript developer,  Passionate about developing fully testable, scalable web applications. Algorithm freak. Agile Team contributor, Quick learner, Smart provider.</p> <br/> <br/><p className='text-gray-400' data-aos="fade-left" data-aos-duration="2000"> I have 2+ Years of working experience as a Web Developer and Msc @EPITA.</p>
        </div>
    )
}

export default Intro;