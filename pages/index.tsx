import { GetStaticProps } from 'next';
import Image from "next/image";
import Head from 'next/head' ;
import { Container, Row, Col } from 'react-bootstrap';
import { Posts, CommunitySection, RankingSection } from '../components' ;
import { useLayout, useAxios, useSearchContext } from '../hooks' ;
import { HOMEPAGE_QUERY } from "../lib/query";
import { HomepageProps, Response } from '../lib/type';

 import styles from '../styles/Home.module.scss' ;

const Home = ({ postsDetail, commuDetail, ranks }: HomepageProps) => {
  const { filter } = useSearchContext();
  
  return (
    <Container className={styles.homepages}>

      <Row>
        
          <Col>
        <div className={styles.postCard}>
          
            <Posts postlist={ filter.length !== 0 
            ? postsDetail.postlist.filter(post => {
              return post.title.toLowerCase().includes(filter.toLowerCase())
            })
            : postsDetail.postlist } 
            
            >

                          
            </Posts>
        </div>
          </Col>

         
        <Col>

          <Row >
            <div className={styles.rankingSec}>
                          <RankingSection
              cardlist={ranks} />
            </div>

          </Row>
          <Col>

          </Col>
          <Row>
            <div className={styles.commuCard}>
                         <CommunitySection 
              cardlist={commuDetail} />
            </div>
 
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
