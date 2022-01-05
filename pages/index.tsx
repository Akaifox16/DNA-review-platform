import Head from 'next/head'
import { ReactElement } from 'react'


import { Layout, Posts, CommunitySection, RankingSection } from '../components'


import styles from '../styles/Home.module.scss'

const Home = () => {
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
