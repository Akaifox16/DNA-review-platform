import Head from 'next/head'
import { ReactElement } from 'react'

import Layout from '../components/Layout'
import PostList from '../components/Post'
import CommunitySection from '../components/CommunitySection'
import RankingSection from '../components/RankingSection'

import styles from '../styles/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <PostList />
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
