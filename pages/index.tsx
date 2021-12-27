import type { NextPage } from 'next'
import Head from 'next/head'
import CommunitySection from '../components/CommunitySection'
import PostList from '../components/Post'
import RankingSection from '../components/RankingSection'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
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

export default Home
