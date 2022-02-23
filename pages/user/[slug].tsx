import { GetStaticPaths, GetStaticProps } from "next";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useAuthChecker, useAxios, useLayout, useStorage } from "../../hooks";
import { ALLUSER_QUERY, EDIT_PROFILE_QUERY, USER_QUERY } from "../../lib/query";
import { Response } from "../../lib/type";
import { User } from "../../lib/type/type";
import styles from '../../styles/Home.module.scss' ;
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { TOKEN_KEY } from "../../config";
type Props = User

const Slug = ({id, name, email, bio, contact, likes, dislikes }: Props) => {
    const { token } = useAuthChecker();
    const [edit, setEdit] = useState(false);
    const owner = token.username === name ? true : false;
    const router = useRouter();
    const { setItem, getItem } = useStorage();
    const [newUser, setUser] =useState({name, bio, contact});
    
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

                    {edit
                    ? <input
                        onChange={e => {
                            setUser({...newUser, name: e.target.value})
                        }}
                        value={newUser.name}
                        />
                    : name}
                </div>
                </Row>
                <Row>
                <div className={styles.bioDetail}>
                    {
                        edit 
                        ? <textarea
                            value={newUser.bio}
                            onChange={e => {
                                setUser({...newUser, bio: e.target.value})
                            }}
                            />
                        : <textarea
                            disabled={true}
                            value={newUser.bio}
                            />
                    }
                </div>
                </Row>
                <Row>
                {/* <div>
                    {
                        edit 
                        ? 
                    }
                </div> */}
                </Row>
                <Row>
                    {
                        owner && (edit 
                        ? <button
                            onClick={e => {
                                e.preventDefault();
                                useAxios(EDIT_PROFILE_QUERY, {user: newUser}, token.token)
                                .then(res => {
                                    setEdit(false);
                                    const oldtoken = getItem(TOKEN_KEY, 'local');
                                    setItem(TOKEN_KEY, JSON.stringify({...JSON.parse(oldtoken), username: newUser.name}), 'local');
                                    router.push(`/user/${newUser.name.replace(/\s/g, '-')}`);
                                    router.reload();
                                });
                            }}
                        >
                            save profile
                        </button>
                        : <button
                            onClick={e => {
                                e.preventDefault();
                                setEdit(true);
                            }}
                        >
                            edit profile
                        </button>)
                    }
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