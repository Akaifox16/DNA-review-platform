import Head from 'next/head' ;
import { Container, Row, Col } from 'react-bootstrap';

import { Posts, CommunitySection, RankingSection } from '../components' ;
import { useDetectUser, useLayout } from '../hooks' ;

import styles from '../styles/Home.module.scss' ;

const Home = () => {
  useDetectUser() ;

  return (
    <Container>
      <Row>
        <Col>
          <Posts />
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

Home.getLayout = useLayout() ;

export default Home ;
