import { GetStaticProps } from 'next';
import Head from 'next/head' ;
import { Container, Row, Col } from 'react-bootstrap';

import { Posts, CommunitySection, RankingSection } from '../components' ;
import { useDetectUser, useLayout, useAxios } from '../hooks' ;
import { POSTS_QUERY } from "../lib/query";
import { PostsDetailProps, Response } from '../lib/type';

import styles from '../styles/Home.module.scss' ;

const Home = ({ postsDetail }:PostsDetailProps ) => {
  return (
    <Container>
      <Row>
        <Col>
          <Posts postsDetail={ postsDetail } />
        </Col>
        <Col>
          <Row>
            <CommunitySection />
          </Row>
          <Row>
            <RankingSection />
          </Row>
        </Col>
      </Row>
    </Container>
  ) ;
}



export const getStaticProps: GetStaticProps = async () => {
  const { data }: Response =  await useAxios(POSTS_QUERY, {} , '');
  const postsDetail = data.data.posts.map(post => {
      const { slug, owner: { name }, id } = post
      return { id, title: slug, owner: name };
  })
  // const { data2 }: Response = await useAxios(COMMU_QUERY,{},'');
  // const communityDetail = data2.commus.map(commu => {
  //     const {id, name, posts} = commu
  //     return {id, name, posts}
  // })
  const communityDetail = {
            id: 12,
            name: "47 Community",
            Post: [],
  }
  
  return {
      props: {
          postsDetail,
          communityDetail,
      },
  };
};

Home.getLayout = useLayout() ;

export default Home ;
