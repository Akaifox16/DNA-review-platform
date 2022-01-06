import Head from 'next/head'
import { ReactElement, useEffect } from 'react'


import { Layout, Posts, CommunitySection, RankingSection } from '../components'
import { useLoginContext, useStorage } from '../hooks'


import styles from '../styles/Home.module.scss'

const Home = () => {
  const { setLogin } = useLoginContext()
  const { getItem } = useStorage()
  useEffect(() => {
    const token = getItem('token')
    if(token){
      setLogin(true)
    }
  }, [])

  return (
    <div className={styles.container}>
      <Posts />
      <div>
        <CommunitySection />
        <RankingSection />
      </div>
    </div>
  )
}

Home.getLayout = (page: ReactElement)=> {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home
