// import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Row, Col, Container } from "react-bootstrap";

import Searchbar from "./Searchbar";
import { useAuthChecker, useDetectUser, useStorage, useUsername } from '../../../hooks';
import UserDropdown from "./UserDropdown";
import { TOKEN_KEY } from "../../../config";
import { useRouter } from "next/router";

const Navbar = () => {
    const { isLogin } = useAuthChecker();
    const { removeItem } = useStorage();
    const router = useRouter();
    useDetectUser();
    const username = useUsername();

    return (
        <Container>
            <Row>
                <Col>
                    <Link href='/'>
                        {/* <button  > */}
                        {/* <img src="https://i.imgur.com/wGqCqjJ.png" width="65" height="65" /> */}
                        <Image 
                            src={'/Dna_logo.png'}
                            height={65}
                            width={65} />
                        {/* </button> */}
                    </Link>
                </Col>
                <Col xs={6}>
                    <Searchbar />   
                </Col>
                <Col>
                    { isLogin && <Row>
                        <Col>
                            <Link href='/post'>
                                <Button 
                                className="secondary" >
                                    My Posts
                                </Button>
                            </Link>
                        </Col>
                        <Col>
                            <Link href={`/user/${username.replace(/\s/g, '-')}`}>
                                <button>
                                    { username }
                                </button>
                            </Link>
                        </Col>
                        {/* <Col>
                        <Link href='/point'>
                            <Button 
                            className="secondary" >
                                Points
                            </Button>
                        </Link>
                        </Col> */}
                    </Row>}
                </Col>
                <Col>
                    {isLogin &&
                        <Button variant="danger"
                        onClick={e => {
                            e.preventDefault();
                            removeItem(TOKEN_KEY, 'local');
                            router.push('/');
                            router.reload();
                        }}>
                            logout
                        </Button>
                        // <UserDropdown username={username}/>
                    }
                    
                    {!isLogin && 
                        <Link href='/login'>
                            <Button className="success"> 
                                Login/Signup
                            </Button>
                        </Link>
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Navbar;