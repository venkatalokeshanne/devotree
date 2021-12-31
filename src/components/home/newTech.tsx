import { useEffect } from 'react';
import Lottie from 'react-lottie'
import * as THREE from 'three';
import blogging from '../home/lottie/Blogging.json';
import { useTranslation } from 'react-i18next'


function NewTech() {
    const { t } = useTranslation('home')


    return (
        <div className='text-center pt-32 md:pt-64 mx-auto md:w-3/5' id="testing">
            <h2 className='purple'>{t('myPast')} 👌🏻</h2>
            <p className='text-gray-400 mt-5' data-aos="fade-right" data-aos-duration="2000">{t('pastText')}<br/>{t('pastTextTwo')}
</p>
        </div>
    )
}

export default NewTech;