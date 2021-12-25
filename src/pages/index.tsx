import Head from 'next/head'
import Image from 'next/image'
import coming from '/public/images/comingsoon.gif'

function Home() {

  return (
    <div className='flex items-center justify-center h-screen w-screen bg-black flex-col font-mono text-white'>
      <Head>
        <title>Devotree</title>
      </Head>
    <Image src={coming} alt='Coming soon'/>
    <h2 className='text-center'>Devo&apos;tree&apos; is growing soon...</h2>
    <p className='text-center'>Meanwhile know about who is creating this tree <a href='/about' className='purple'> Venkata Lokesh Anne </a></p>
    </div>
  )
}

export default Home