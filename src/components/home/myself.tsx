import { useEffect } from 'react';
import Lottie from 'react-lottie'
import * as THREE from 'three';
import blogging from '../home/lottie/Blogging.json';
function Myself() {


    return (
        <div className='text-center mt-20 h-screen mx-auto md:w-3/5' id="testing">
            <h1>avl<span className='purple'>.is()</span></h1>
            <p className='purple'>Venkata Lokesh Anne</p>
            <p className='text-gray-400 mt-5' data-aos="fade-right" data-aos-duration="2000">Javascript Frontend Developer, <br/>React Developer, 3D ❤️ <br/></p>
        </div>
    )
}

export default Myself;