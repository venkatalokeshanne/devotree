import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faCode, faClock } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next'


function MadeWith() {
    const { t } = useTranslation('home')

    return (
        <div className='pt-32 md:pt-64 mx-auto md:w-3/5' id="testing">
            <h2 className='purple'>{t('madeWith')}</h2>
            <div className="inline-block">
                <ul className="text-gray-400 mt-5 mr-20">
                <FontAwesomeIcon icon={faCode} style={{color: "white", height: "2rem", width: "2rem"}} />
                    <li>Next.js</li>
                    <li>React.js</li>
                    <li>Tailwind</li>
                    <li>Photoshop</li>
                    <li>Illustrators</li>
                </ul>
            </div>
            <div className="inline-block">
                <ul className="text-gray-400 mt-5 mr-20">
                <FontAwesomeIcon icon={faClock} style={{color: "white", height: "2rem", width: "2rem"}} />
                    <li>54 files</li>
                    <li>12MB</li>
                    <li>+100 of thinking</li>
                    <li>+56 hours of code</li>
                    <li>+30 bananas</li>
                    <li>+20 liters carrot juice</li>
                </ul>
            </div>
            <div className="inline-block">
                <ul className="text-gray-400 mt-5">
                    <FontAwesomeIcon icon={faMusic} style={{color: "white", height: "2rem", width: "2rem"}} />
                    <li>Good for you</li>
                    <li>నాటు నాటు</li>
                    <li>Bella Ciao</li>
                    <li>Papaoutai</li>
                    <li>లైఫ్ అఫ్ రామ్</li>
                    <li>Blinding Lights</li>
                </ul>
            </div>
        </div>
    )
}

export default MadeWith;