import { useTranslation } from 'react-i18next'

function Myself() {
    const { t } = useTranslation('home')


    return (
        <div className='text-center mt-20 h-screen mx-auto md:w-3/5'>
            <h1>avl<span className='purple'>.is()</span></h1>
            <p className='purple'>Venkata Lokesh Anne</p>
            <p className='text-gray-400 mt-5' data-aos="fade-right" data-aos-duration="2000">{t('myself.frontEnd')}, <br/>{t('myself.react')}, 3D ❤️ <br/></p>
        </div>
    )
}

export default Myself;