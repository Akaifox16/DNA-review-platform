import { GetStaticProps } from 'next';
import Head from 'next/head' ;
import { Container, Row, Col } from 'react-bootstrap';

import { Posts, CommunitySection, RankingSection } from '../components' ;
import { useLayout, useAxios, useSearchContext } from '../hooks' ;
import { HOMEPAGE_QUERY } from "../lib/query";
import { HomepageProps, Response } from '../lib/type';

// import styles from '../styles/Home.module.scss' ;

const Home = ({ postsDetail, commuDetail, ranks }: HomepageProps) => {
  const { filter } = useSearchContext();

  // console.log(postsDetail.postlist);
  
  return (
    <Container>
      <Row>
        <Col>
          <Posts postlist={ filter.length !== 0 
          ? postsDetail.postlist.filter(post => {
            return post.title.toLowerCase().includes(filter.toLowerCase())
          })
          : postsDetail.postlist } />
        </Col>
        <Col>
          <Row>
            <RankingSection
              cardlist={ranks} />
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
      const { slug, owner: { name }, id, tags } = post;
      return {id, 
              title: slug, 
              tags, 
              owner: name };
  })
  // console.log(postsDetail)
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
