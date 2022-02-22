import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useState } from 'react'

import { LoginContext } from '../context'

import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Token } from '../lib/type'

type PageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [token, setToken] = useState<Token>({
                                              username:'',
                                              token: '',
                                            });
  const getLayout = Component.getLayout ?? ((page)=> page);

  return (
    <LoginContext.Provider value={ { token, setToken } }>
      {
        
        getLayout(
          <Component {...pageProps} />
        )
      }
    </LoginContext.Provider>
  ) ;
}

export default MyApp ;
