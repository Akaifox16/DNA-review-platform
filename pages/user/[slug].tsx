import { GetStaticPaths, GetStaticProps } from "next";
import { Component } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useAxios, useLayout } from "../../hooks";
import { ALLUSER_QUERY, USER_QUERY } from "../../lib/query";
import { Response } from "../../lib/type";
import { User } from "../../lib/type/type";
import styles from '../../styles/Home.module.scss' ;
import Image from "next/image";
type Props = User

const Slug = ({id, name, email, bio, contact, likes, dislikes }: Props) => {
    return (
        <Container className={styles.homepages}>
            <Row>
            <Col>
            <Stack>
                <div className={styles.proCard}>
                <Image 
                        src={'/favicon.ico'}
                        width={165}
                        height={165} />
                    
                <div className={styles.likeSec}>
                    {/* {like}
                    <Image 
                        src={'/like.png'}
                        width={25}
                        height={25}
                        
                         ></Image>    
                     */}
                     <h5>like {likes}</h5>
                        
                </div>
                <div className={styles.dislikeSec}>

                    <h5>Dislike {dislikes}</h5>
                        
                </div>

                    
                    
                    
                        
                    
                    
                </div>
            </Stack>

            </Col>
            <Col>
                <Row >
                <div className={styles.userName}>
                    
                            {name
                        }
                    
               
                </div>
                </Row>
                <Col>
                </Col>
                <Row>
                <div className={styles.bioDetail}>
                    {email}
                </div>
                </Row>
            </Col>
            </Row>
        </Container>
        
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: {data: {ranking}} }: Response = await useAxios(ALLUSER_QUERY, {}, '');
    const paths = ranking.map(user => ({
        params: {
            slug: user.name.replace(/\s/g, '-')
        }
    }));

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if(params !== undefined){
        console.log(params)

        const { data: {data: { userById }} }: Response = await useAxios(USER_QUERY, {id: params.slug}, '');
        const { id, name, email, bio, contact, likes, dislikes } = userById
            
        return {
            props:{
                id,
                name, 
                email, 
                bio, 
                contact, 
                likes, 
                dislikes
            }
        }

    }
    
    return {
        props:{
            // params
        }
    }
}
Slug.getLayout = useLayout() ;

export default Slug;