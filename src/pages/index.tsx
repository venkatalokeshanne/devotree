import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/home/home'
import Myself from '../components/home/myself'
import coming from '/public/images/comingsoon.gif'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../il8n.config';

function Devotree() {

  return (
    <>
    <Head>
        <title>Devotree - Venkata Lokesh Anne</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8"/>
        <meta name="description" content="Venkata Lokesh Anne, Javascript Front end developer, This is my portifolio with intresting user interface. This website contains infomation about my skills and my professional work experience "/>
        <meta name="keywords" content="devotree, developer, Blogging, Portifolio, Javascript, venkata, venkata lokesh, venkata lokesh anne, Reactjs"/>
        <meta name="author" content="Venkata Lokesh Anne"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="google-site-verification" content="Ta8veGgn9iC9_zrWH0pjvk8FleL36grNBqtiXrv-VhY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-216111271-1">
        </script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-216111271-1');
        </script>
    </Head>
    <Home />
    </>
  )
}

export default Devotree

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['home'], nextI18NextConfig),
  },
})
