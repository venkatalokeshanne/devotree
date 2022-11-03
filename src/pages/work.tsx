
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../il8n.config';

function Work() {
    const { t } = useTranslation('home')
    return (
        <div className="flex flex-col pt-64 ml-5 mr-5 screenW">

<div className="flex items-center justify-center ">
                <div>
                    <h2 className="purple text-center">Javascript FrontEnd Developer</h2>
                    <div className="text-center">
                        <img className="image inline-block w-10 mr-3" src="/images/meritis.webp"></img>
                        <p className="text-white text-center inline-block">@Meritis (Permanent)</p></div>
                    <p className="text-gray-400 text-center pt-5 pb-5">March'22 - now </p>
                    <div>
                        <img className="image inline-block w-10 mr-3" src="/images/cacib.webp"></img>
                        <p className="text-white  inline-block">@Credit Agricole (CACIB) - Consultant</p></div>
                    <p className="text-gray-400 text-center pt-5 pb-5">March'22 - now</p>
                    <ul className="text-gray-400 ">
                        <p className="text-center text-white  pb-5">{t('work.artysium.tools')}</p>
                        <li>
                        {t('work.meritis.one')}
                        </li>
                        <li>
                        {t('work.meritis.two')}
                        </li>
                        <li>
                        {t('work.meritis.three')}
                        </li>
                    </ul>
                </div>
                <div className="w-3/12 md:block hidden">
                    <img className="image inline-block w-20 mr-10" src="/images/javascriptLogo.webp"></img>
                    <img className="image inline-block w-20 mr-10" src="/images/react-logo.webp"></img>
                    <img className="image inline-block w-20 mr-10" src="/images/reduxLogo.webp"></img><br />
                    <img className="image inline-block w-20 mt-10 mr-10" src="/images/html-logo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10" src="/images/css-logo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10" src="/images/webPackLogo.webp"></img><br />
                    <img className="image inline-block w-20 mt-10 mr-10 text-center" src="/images/git-logo.webp"></img>
                </div>
            </div>
            <div className="flex items-center justify-center mt-64 ">
                <div className="w-3/12 md:block hidden">
                    <img className="image inline-block w-20 mr-10" src="/images/javascriptLogo.webp"></img>
                    <img className="image inline-block w-20 mr-10" src="/images/react-logo.webp"></img>
                    <img className="image inline-block w-20 mr-10" src="/images/reduxLogo.webp"></img><br />
                    <img className="image inline-block w-20 mt-10 mr-10" src="/images/html-logo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10" src="/images/css-logo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10" src="/images/webPackLogo.webp"></img><br />
                    <img className="image inline-block w-20 mt-10 mr-10 text-center" src="/images/aws-logo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10 text-center" src="/images/animate-logo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10 text-center" src="/images/git-logo.webp"></img>
                </div>
                <div>
                    <h2 className="purple text-center">Javascript FrontEnd Developer</h2>
                    <div className="text-center">
                        <img className="image inline-block w-10 mr-3" src="/images/artysium.webp"></img>
                        <p className="text-white text-center inline-block">@Artysium</p></div>
                    <p className="text-gray-400 text-center pt-5 pb-5">2021 - March'22</p>
                    <ul className="text-gray-400 ">
                        <p className="text-center text-white  pb-5">{t('work.artysium.tools')}</p>
                        <li>
                        {t('work.artysium.one')}
                        </li>
                        <li>
                        {t('work.artysium.two')}
                        </li>
                        <li>
                        {t('work.artysium.three')}
                        </li>
                        <li>
                        {t('work.artysium.four')}
                        </li>
                        <li>
                        {t('work.artysium.five')}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex items-center justify-center mt-64">
                <div className="md:mr-20">
                    <h2 className="purple text-center">Javascript Developer</h2>
                    <div className="text-center">
                        <img className="image inline-block w-10 mr-3" src="/images/ITSS.webp"></img>
                        <p className="text-white text-center inline-block">@ITSS</p></div>
                    <p className="text-gray-400 text-center pt-5 pb-5">2020 - 2021</p>
                    <ul className="text-gray-400 ">
                        <p className="text-center text-white  pb-5">{t('work.itss.tools')}</p>
                        <li>
                        {t('work.itss.one')} <br/>{t('work.itss.two')}
                        </li>
                        <li>
                        {t('work.itss.three')}
                        </li>
                        <li>
                        {t('work.itss.four')}
                        </li>
                    </ul>
                </div>
                <div className="w-3/12 md:block hidden">
                    <img className="image inline-block w-20 mr-10" src="/images/javascriptLogo.webp"></img>
                    <img className="image inline-block w-20 mr-10" src="/images/react-logo.webp"></img>
                    <img className="image inline-block w-20 mr-10" src="/images/reduxLogo.webp"></img><br />
                    <img className="image inline-block w-20 mt-10 mr-10" src="/images/html-logo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10" src="/images/css-logo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10" src="/images/java-logo.webp"></img><br />
                    <img className="image inline-block w-20 mt-10 mr-10 text-center" src="/images/aws-logo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10 text-center" src="/images/animate-logo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10 text-center" src="/images/git-logo.webp"></img>
                </div>
            </div>

            <div className="flex items-center justify-center mt-64">
            <div className="w-5/12 md:block hidden">
                    <img className="image inline-block w-20 mr-10" src="/images/javascriptLogo.webp"></img>
                    <img className="image inline-block w-20 mr-10" src="/images/react-logo.webp"></img>
                    <img className="image inline-block w-20 mr-10" src="/images/reduxLogo.webp"></img><br />
                    <img className="image inline-block w-20 mt-10 mr-10" src="/images/html-logo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10" src="/images/css-logo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10" src="/images/webPackLogo.webp"></img><br />
                    <img className="image inline-block w-20 mt-10 mr-10 text-center" src="/images/aws-logo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10 text-center" src="/images/animate-logo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10 text-center" src="/images/git-logo.webp"></img>
                </div>
                <div>
                    <h2 className="purple text-center">Research and Innovation</h2>
                    <div className="text-center">
                        <img className="image inline-block w-10 mr-3" src="/images/quadient.webp"></img>
                        <p className="text-white text-center inline-block">@Quadient Shipping</p></div>
                    <p className="text-gray-400 text-center pt-5 pb-5">2019 - 2020</p>
                    <ul className="text-gray-400 ">
                        <p className="text-center text-white  pb-5">{t('work.quadient.tools')}</p>
                        <li>
                        {t('work.quadient.one')}
                        </li>
                        <li>
                        {t('work.quadient.two')}
                        </li>
                        <li>
                        {t('work.quadient.three')}
                        </li>
                        <li>
                        {t('work.quadient.four')}
                        </li>
                        <li>
                        {t('work.quadient.five')}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex items-center justify-center mt-64 mb-64">
                <div className="md:mr-20">
                    <h2 className="purple text-center">FullStack Developer</h2>
                    <div className="text-center">
                        <img className="image inline-block w-10 mr-3" src="/images/GaitView.webp"></img>
                        <p className="text-white text-center inline-block">@Gait View Technophiles Private Limited</p></div>
                    <p className="text-gray-400 text-center pt-5 pb-5">2017 - 2019</p>
                    <ul className="text-gray-400 ">
                        <p className="text-center text-white  pb-5">{t('work.gaitview.tools')}</p>
                        <li>
                        {t('work.gaitview.one')}
                        </li>
                        <li>
                        {t('work.gaitview.two')}<br/> {t('work.gaitview.three')}
                        </li>
                        <li>
                        {t('work.gaitview.four')} <br/> {t('work.gaitview.five')}
                        </li>
                    </ul>
                </div>
                <div className="w-3/12 md:block hidden">
                <img className="image inline-block w-20 mt-10 mr-10 text-center" src="/images/java-logo.webp"></img>
                <img className="image inline-block w-20 mt-10 mr-10 text-center" src="/images/spring-logo.webp"></img>
                    <img className="image inline-block w-20 mr-10" src="/images/javascriptLogo.webp"></img><br />
                    <img className="image inline-block w-20 mr-10" src="/images/react-logo.webp"></img>
                    <img className="image inline-block w-20 mr-10" src="/images/reduxLogo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10" src="/images/html-logo.webp"></img><br />
                    <img className="image inline-block w-20 mt-10 mr-10" src="/images/css-logo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10" src="/images/webPackLogo.webp"></img>
                    <img className="image inline-block w-20 mt-10 mr-10 text-center" src="/images/git-logo.webp"></img>
                </div>
            </div>
        </div>
    )
}

export default Work;

export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['home'], nextI18NextConfig),
    },
  })