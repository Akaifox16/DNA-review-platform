// import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Row, Col, Container, Stack } from "react-bootstrap";

import Searchbar from "./Searchbar";
import { useAuthChecker, useDetectUser, useStorage, useUsername } from '../../../hooks';
import UserDropdown from "./UserDropdown";
import { TOKEN_KEY } from "../../../config";
import { useRouter } from "next/router";
import styles from '../../../styles/Navbar.module.scss' ;
const Navbar = () => {
    const { isLogin } = useAuthChecker();
    const { removeItem } = useStorage();
    const router = useRouter();
    useDetectUser();
    const username = useUsername();

    return (
        <div>
            {/* <Container> */}
                <div >
                    <div className={styles.dpb}>
                        <div>
                            {/* <Col> */}
                                <Link href='/'>
                                    {/* <button  > */}
                                    {/* <img src="https://i.imgur.com/wGqCqjJ.png" width="65" height="65" /> */}
                                    <Image  className={styles.hs}
                                        src={'/Dna_logo.png'}
                                        height={80}
                                        width={80} />
                                    {/* </button> */}
                                </Link>
                            {/* </Col> */}
                        </div>
                        <div className={styles.sss}>
                                { isLogin && 
                                <Row className={styles.sbr}>
                            <Stack direction="horizontal"  >
                                <div className={styles.sb}>
                                    <Searchbar />   
                                </div>
                        
                                <div >
                                    {/* <Col> */}
                                        <Link href='/post'>
                                            <button className={styles.myPostCard} >
                                                My Posts
                                            </button>
                                        </Link>
                                    {/* </Col> */}
    
                                </div>
                                <div className={styles.userButton} >
                                    {/* <Col> */}
                                    <Link href={`/user/${username.replace(/\s/g, '-')}`}>
                                        <button className={styles.userButton}>
                                            { username }
                                        </button>
                                    </Link>
                                    {/* </Col>  */}
                                </div>
    
    
                                <div className={styles.loginBut}>
                                    {/* <Col> */}
                                    {isLogin &&
                                        <button className={styles.loginBut}
                                            onClick={e => {
                                            e.preventDefault();
                                            removeItem(TOKEN_KEY, 'local');
                                            router.push('/');
                                            router.reload();
                                        }}>
                                            Logout
                                        </button>
                                            // <UserDropdown username={username}/>
                                    }
                            
                                    {!isLogin && 
                                        <Link href='/login'>
                                            <button className="success"> 
                                                Login/Signup
                                            </button>
                                            </Link>
                                    }
                                    {/* </Col>  */}
                                </div>
                            
                                </Stack>
                            </Row>}
                        </div>
                    </div>
                    {/* <Col xs={2}> */}
                    {/* </Col> */}
                    {/* <Col> */}
    
    
                    {/* </Col> */}
     
                </div>
            {/* </Container> */}
        </div>
    );
}

export default Navbar;