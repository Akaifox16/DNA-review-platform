import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useState } from 'react'

import { LoginContext } from '../context'

import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

type PageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [isLogin, setLogin] = useState(false);
  const getLayout = Component.getLayout ?? ((page)=> page);

  return (
    <LoginContext.Provider value={ { isLogin, setLogin } }>
      {
        getLayout(
          <Component {...pageProps} />
        )
      }
    </LoginContext.Provider>
  ) ;
}

export default MyApp ;
