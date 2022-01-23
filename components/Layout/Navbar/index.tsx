import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Row, Col, Container } from "react-bootstrap";

import Searchbar from "./Searchbar";
import { useLoginContext } from '../../../hooks';
import UserDropdown from "./UserDropdown";

const Navbar = () => {
    const { token } = useLoginContext();
    let isLogin: Boolean;
    if(token.username === ''){
        isLogin = false
    }else{
        isLogin = true
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Link href='/'>
                        <Button className="secondary" >DNA</Button>
                    </Link>
                </Col>
                <Col xs={6}>
                    <Searchbar />   
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Link href='/post'>
                                <Button 
                                className="secondary" >
                                    Posts
                                </Button>
                            </Link>
                        </Col>
                        <Col>
                        <Link href='/point'>
                            <Button 
                            className="secondary" >
                                Points
                            </Button>
                        </Link>
                        </Col>
                    </Row>
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