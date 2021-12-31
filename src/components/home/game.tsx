import FlipCard from './flipCard';
import { useTranslation } from 'react-i18next'

function Game() {
    const { t } = useTranslation('home')

    return (
        <div className='text-center pt-32 md:pt-64 mx-auto md:w-3/5' id="testing">
            <h2 className='purple'>Let's Play</h2>
            <p className='text-gray-400 mt-5' data-aos="fade-right" data-aos-duration="2000"><br/>{t('interest')} <br/>
            </p>
            <p data-aos="fade-right" data-aos-duration="2000" className='text-white'>{t('flip')}</p>
            <FlipCard />
            <p data-aos="fade-right" data-aos-duration="2000" className='text-gray-400'>{t('gameBottom')}</p>
        </div>
    )
}

export default Game;