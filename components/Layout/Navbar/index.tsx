import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Row, Col, Container } from "react-bootstrap";

import Searchbar from "./Searchbar";
import { useAuthChecker, useDetectUser } from '../../../hooks';
import UserDropdown from "./UserDropdown";

const Navbar = () => {
    const { isLogin } = useAuthChecker();
    useDetectUser();

    return (
        <Container>
            <Row>
                <Col>
                    <Link href='/'>
                        <Button className="secondary" type="submit" class="logo" >
                        <img src="https://i.imgur.com/wGqCqjJ.png" width="65" height="65" />
                        
                        </Button>
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
                        <UserDropdown />
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