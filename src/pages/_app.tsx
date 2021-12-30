import '../styles/globals.css'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
// import store from '../app/store'
import aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Layout from '../components/home/layout';

export default function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    aos.init();
  })
  return (
      // <Provider store={store}>
      <>
        <Layout />
        <Component {...pageProps} />
        </>
      // </Provider>
  )
}
