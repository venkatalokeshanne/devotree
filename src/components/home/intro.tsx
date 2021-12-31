import { useEffect } from 'react';
import Lottie from 'react-lottie'
import * as THREE from 'three';
import blogging from './lottie/Blogging.json';
import { useTranslation } from 'react-i18next'

function Intro() {
    const { t } = useTranslation('home')

    return (
        <div className='text-center pt-20 md:pt-20 mx-auto md:w-3/5' id="testing2">
            <h2 className='purple'>I am, Je suis, Yo soy 😎</h2>
            <p className='text-gray-400' data-aos="fade-right" data-aos-duration="2000">{t('intro')}</p> <br/> <br/><p className='text-gray-400' data-aos="fade-left" data-aos-duration="2000">{t('exp')}</p>
        </div>
    )
}

export default Intro;