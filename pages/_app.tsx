import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { useState } from 'react'
import { LoginContext } from '../context/LoginContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLogin, setLogin] = useState(false)

  return (
    <LoginContext.Provider value={ { isLogin, setLogin } }>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoginContext.Provider>
  )
}

export default MyApp
