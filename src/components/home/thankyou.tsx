import Link from "next/link";
import { useTranslation } from 'react-i18next'

function Thankyou() {
    const { t } = useTranslation('home')

    return (
        <div className="mb-64">
            <h2>{t('tankyou')}</h2>
            <p className="text-gray-400">{t('thankyou.process')}</p>
            <h1 >Check <Link href="/about"><span className="purple">About me</span></Link> <br/>for more <Link href="/work"><span className="purple">details</span></Link></h1>
        </div>
    )
}

export default Thankyou;