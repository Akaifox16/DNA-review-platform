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

    console.log(isLogin)

    return (
        <div>
                <div >
                    <div className={styles.gridContainer}>
                        <div className={styles.gridLogo}>
                                <Link href='/'>
                                    {/* <button  > */}
                                    {/* <img src="https://i.imgur.com/wGqCqjJ.png" width="65" height="65" /> */}
                                    <Image  className={styles.hs}
                                        src={'/Dna_logo.png'}
                                        height={80}
                                        width={80} />
                                    {/* </button> */}
                                </Link>
                        </div>
                        {/* <div className={styles.gridContainer}> */}
                                {/* <Row > */}
                                {/* <Stack direction="horizontal"  > */}
                                {   isLogin
                                    ? <div className={styles.gridSearch}>
                                    <Searchbar />   
                                    </div>
                                    : <div className={styles.gridSearchNoAuth}>
                                        <Searchbar />
                                    </div>
                                }
                        
                                { isLogin && 
                                <div className={styles.gridPosts}>
                                        <Link href='/post'>
                                            <button className={styles.myPostCard} >
                                                My Posts
                                            </button>
                                        </Link>
                                </div>
                                }
                                { isLogin &&
                                    <div className={styles.gridUsername} >
                                    <Link href={`/user/${username.replace(/\s/g, '-')}`}>
                                        <button className={styles.userButton}>
                                            { username }
                                        </button>
                                    </Link>
                                    </div>
                                }   
                                <div className={styles.gridLogin}>
                                    {!isLogin 
                                    ? (
                                    <Link href='/login'>
                                            <button className={styles.loginBut} > 
                                                Login/Signup
                                            </button>
                                    </Link>
                                    )
                                    :    <button className={styles.loginBut}
                                                onClick={e => {
                                                e.preventDefault();
                                                removeItem(TOKEN_KEY, 'local');
                                                router.push('/');
                                                router.reload();
                                            }}>
                                                Logout
                                            </button>
                                    }
                                </div>
                                {/* </Stack> */}
                            {/* </Row> */}
                        {/* </div> */}
                    </div>
                </div>
        </div>
    );
}

export default Navbar;