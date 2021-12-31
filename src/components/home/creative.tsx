import { useTranslation } from 'react-i18next'

function Creative() {

    const { t } = useTranslation('home')
    return (
        <div className='text-center pt-32 md:pt-64 mx-auto md:w-3/5' id="testing">
            <h2 className='purple'>{t('heading.creativity')} 👨🏻‍🦰</h2>
            <p className='text-gray-400 mt-5' data-aos="fade-right" data-aos-duration="2000"> <br/>{t('creativity')} 😜. <a href='/about' className='purple'>About me</a>
            </p>
        </div>
    )
}

export default Creative;