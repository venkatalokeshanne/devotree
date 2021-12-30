import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/home/home'
import Myself from '../components/home/myself'
import coming from '/public/images/comingsoon.gif'

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
    </Head>
    <Home />
    </>
  )
}

export default Devotree