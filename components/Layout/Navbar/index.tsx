import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Row, Col, Container } from "react-bootstrap";

import Searchbar from "./Searchbar";
import { useLoginContext } from '../../../hooks';
import UserDropdown from "./UserDropdown";

const Navbar = () => {
    const { isLogin } = useLoginContext();

    return (
        <Container>
            <Row>
                <Col>
                    <Link href='/'>
                        <Button className="secondary" >DNA</Button>
                    </Link>
                </Col>
                    <Searchbar />   
                <Col>
                    <div>
                        <Link href='/post'>
                            <Button 
                            className="secondary" >
                                Posts
                            </Button>
                        </Link>
                        <Link href='/point'>
                            <Button 
                            className="secondary" >
                                Points
                            </Button>
                        </Link>
                    </div>
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