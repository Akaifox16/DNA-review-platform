import Head from 'next/head' ;

import { Posts, CommunitySection, RankingSection } from '../components' ;
import { useDetectUser, useLayout } from '../hooks' ;

import styles from '../styles/Home.module.scss' ;

const Home = () => {
  useDetectUser() ;

  return (
    <div className={styles.container}>
      <Posts />
      <div>
        <CommunitySection />
        <RankingSection />
      </div>
    </div>
  ) ;
}

Home.getLayout = useLayout() ;

export default Home ;
