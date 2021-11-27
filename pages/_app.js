import Login from '../components/Login'
import React from 'react'
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) { 
  return   <React.Fragment>
  <Head>
    <meta name="theme-color" content="#3c1742" />
  </Head>
  <Login />
</React.Fragment>
}

export default MyApp
