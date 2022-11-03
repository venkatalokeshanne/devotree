import Image from 'next/image';
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../il8n.config';

export default function About() {
    const { t } = useTranslation('home')
    const router = useRouter()

    return (
        <div className='h-screen w-screen flex screenW'>
            <div className='hidden h-full md:block' data-aos="zoom-in" data-aos-duration="3000">
                <img alt='venkata lokesh anne' title='Venkata Lokesh Anne' src='/images/myself.webp' className='h-full' />
            </div>
            <div className='pt-64 about m-6' data-aos="zoom-in" data-aos-duration="2000">
                <h1>about(<span className='purple fontSize' title='Venkata Lokesh Anne'>AVL</span>)</h1>
                <ul className='flex mt-5 items-center'>
                    <li className='mr-5'>
                        <a target="_blank" href='https://www.linkedin.com/in/venkatalokesh/'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="img" aria-labelledby="LinkedinIcoTitle" className="ico"><title id="LinkedinIcoTitle">LinkedIn logo</title><path stroke="none" d="M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"></path></svg></a>
                    </li>
                    <li className='mr-5'>
                        <a target="_blank" href='https://github.com/venkatalokeshanne'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="img" aria-labelledby="GithubIcoTitle" className="ico"><title id="GithubIcoTitle">GitHub logo</title><path stroke="none" fillRule="evenodd" d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z" clipRule="evenodd"></path></svg></a>
                    </li>
                    <li className='text-gray-400 flex items-center'>
                        {t('download')} {router.locale === 'en' ? 'CV in english' : 'CV en français'}
                        <a target="_blank" title="Download resume" href={router.locale === 'en' ? '/venkata-lokesh-resume-en.pdf' : '/venkata-lokesh-resume-fr.pdf'} className='resume'>resume <img src='/images/downloadIcon.webp' className='ico ml-2'></img></a>
                    </li>
                </ul>
                <p className='purple mt-5'>{t('about')}<br /></p>
                <p className='text-gray-400 mt-5'>// 2+ {t('about.exp')}</p>
                <h2 className='mt-8'>Main Skills</h2>
                <ul className=' text-gray-400'>
                    <li className='mr-10 inline-block mt-5 md:w-1/3'>
                        Frontend developer, <br />
                        React developer
                    </li>
                    <li className='mr-10 inline-block mt-5 md:w-1/3'>
                        Javascript, CSS, HTML <br />
                        Next js, React, Node js
                    </li>
                    <li className='mr-10 inline-block mt-5 md:w-1/3'>
                        Webpack, PWA <br />
                        Cypress, Jest
                    </li>
                    <li className='mr-10 inline-block mt-5 md:w-1/3'>
                        GIT, Docker<br />
                        AWS, Devops
                    </li>
                </ul>
                <ul className=' text-gray-400'>
                    <li className='mr-10 inline-block mt-5 md:w-1/3'>
                        Spring, Hibernet<br />
                        Struts, MySql
                    </li>
                    <li className='mr-10 inline-block mt-5 md:w-1/3'>
                        Drupal<br />
                        WordPress, GraphQl
                    </li>
                    <li className='inline-block mt-5 md:w-1/3'>
                        Java experienced <br />
                        Python learner
                    </li>
                </ul>

                <h2 className='mt-10'>Tools/years</h2>
                <ul className=' text-gray-400'>
                    <li className='mr-10 inline-block mt-5'>
                        JavaScript /+2 <br />
                        React /+2<br />
                        CSS /+2<br />
                        HTML /+2<br />
                        Vue /+1 <br />
                        Node js /+1
                    </li>
                    <li className='mr-10 inline-block mt-5'>
                        Webpack/+2 <br />
                        Jest /+2 <br />
                        Cypress /+2<br />
                        react-testing-library /+2<br />
                    </li>
                    <li className='mr-10 inline-block mt-5'>
                        Typescript /+1 <br />
                        PWA /~1<br />
                        Webtools /+2
                    </li>
                    <li className='inline-block mt-5'>
                        Drupal /+1 <br />
                        Java /~1<br />
                    </li>
                </ul>

                <h2 className='mt-10'>Experience</h2>
                <ul className=' text-gray-400'>
                    <li className='mr-10 inline-block mt-5'>
                        <p className='purple'>Javascript Frontend Developer</p>
                        @ Artysium<br />
                        2021 - now<br />
                        Based in Paris
                    </li>
                    <li className='mr-10 inline-block mt-5'>
                        <p className='purple'>Javascript Frontend Developer </p>
                        @ ITSS <br />
                        2020 - 2021<br />
                        Based in Paris
                    </li>
                </ul>
                <ul className=' text-gray-400'>
                    <li className='mr-10 inline-block mt-5'>
                        <p className='purple'>Research & Development </p>
                        @ Neopost shipping <br />
                        2019 - 2020<br />
                        Based in France
                    </li>
                    <li className='inline-block mt-5'>
                        <p className='purple'>Fullstack Developer </p>
                        @ Gait View Technophiles Private Limited <br />
                        2018 - 2019<br />
                        Based in India
                    </li>
                </ul>

                <h2 className='mt-10'>Languages</h2>
                <ul className=' text-gray-400'>
                    <li className='mr-20 inline-block mt-5'>
                        <p className='text-gray-400'>// fluent</p>
                        <span className='purple'>en-US</span>  English<br />
                        <span className='purple'>te-IN</span>  తెలుగు<br />
                        <span className='purple'>hi-IN</span>  हिन्दी
                    </li>
                    <li className='mr-20 inline-block mt-5'>
                        <p className='text-gray-400'>// intermediate </p>
                        <span className='purple'>fr-FR</span>  Français <br />
                    </li>
                    <li className='mr-10 inline-block mt-5'>
                        <p className='text-gray-400'>// basic </p>
                        <span className='purple'>es-ES</span>  Español <br />
                    </li>
                </ul>
                <h2 className='mt-8'>Also busy with</h2>
                <ul className=' text-gray-400 mb-60'>
                    <li className='mr-10 inline-block mt-5 md:w-1/3'>
                        Blogging 😎<br />
                    </li>
                    <li className='mr-10 inline-block mt-5 md:w-1/3'>
                        Selena Gomez music 🤪<br />
                    </li>
                    <li className='inline-block mt-5 md:w-1/3'>
                        Planning 🤔<br />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['home'], nextI18NextConfig),
    },
  })