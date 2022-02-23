import { GetStaticProps } from 'next';
import Head from 'next/head' ;
import { Container, Row, Col } from 'react-bootstrap';
import Image from "next/image";
import { Posts, CommunitySection, RankingSection } from '../components' ;
import { useDetectUser, useLayout, useAxios } from '../hooks' ;
import { HOMEPAGE_QUERY } from "../lib/query";
import { HomepageProps, Response } from '../lib/type';

import styles from '../styles/Home.module.scss' ;

const Home = ({ postsDetail, commuDetail, ranks }: HomepageProps) => {
  return (
    <Container className={styles.homepages}>
      <Row>
        <Col>
          <Posts postlist={ postsDetail.postlist } />
        </Col>
        <Col>
          <Row >
            <div className={styles.rankingSec}>
                          <RankingSection
              cardlist={ranks} />
            </div>

          </Row>
          <Row>
            <CommunitySection 
              cardlist={commuDetail} />
          </Row>
        </Col>
      </Row>
    </Container>
  ) ;
}



export const getStaticProps: GetStaticProps = async () => {
  const { data: { data: { posts, communities, ranking }} }: Response =  await useAxios(HOMEPAGE_QUERY, {} , '');
  const postsDetail = posts.map(post => {
      const { slug, owner: { name }, id } = post;
      return { id, title: slug, owner: name };
  })

  return {
      props: {
          postsDetail: {
            postlist: postsDetail
          },
          commuDetail: communities,
          ranks: ranking,
      },
  };
};

Home.getLayout = useLayout() ;

export default Home ;
