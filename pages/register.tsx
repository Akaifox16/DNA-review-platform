import { useState } from "react";
import { Button, Alert, Card, Form, FloatingLabel } from "react-bootstrap";
import Link from 'next/link'

import { useAlert, useRegister } from "../hooks";
import { Input } from "../components";

const Register = () => {
    const [user,setUser] = useState({name: "",
                                    email: "",
                                    password: "",}) ;
    const [disable, setEnable] = useState(true) ;
    const { alert } = useAlert();
    const signin = useRegister(user);


    return (
        <div className="m-5">
        {
            alert.show && alert.success &&<Alert  variant="success">
            {alert.message}
            </Alert>
        }
        {
            alert.show && !alert.success && <Alert  variant="danger">
            {alert.message}
            </Alert>
        }
        <Card className="text-center">
            <Card.Body>
                <Card.Title><h1>Register</h1></Card.Title>
                <div className="mx-md-5" >
                    <Form>
                        <Input 
                            controlId="floatingUsername"
                            label="Username"
                            type="text"
                            onChange= {
                                e => {
                                    setUser({...user, name: e.target.value});
                                }
                            }
                        />
                        <Input 
                            controlId="floatingEmail"
                            label="Email"
                            type="email"
                            onChange= {
                                e => {
                                    setUser({...user, email: e.target.value});
                                }
                            }
                        />
                        <Input 
                            controlId="floatingPassword"
                            label="Password"
                            type="password"
                            onChange= {
                                e => {
                                    setUser({...user, password: e.target.value});
                                }
                            }
                        />
                        <Input 
                            controlId="floatingConfirmationPassword"
                            label="Confirm Password"
                            type="password"
                            onChange= {
                                e => {
                                    if (e.target.value === user.password){
                                        setEnable(false);
                                    }else{
                                        setEnable(true);
                                    }
                                }
                            }
                        />
                    <div className="m-3">
                        <Button 
                        variant="success" 
                        type= "submit" 
                        size = "lg" 
                        disabled={ disable }
                        onClick={e => {
                            e.preventDefault();
                            signin();
                        }}
                        >
                            Register
                        </Button>
                        {' '}
                        <Link href='/'>
                            <Button 
                            variant="secondary"
                            size="lg">
                                Back
                            </Button>
                        </Link>
                    </div>
                    </Form>
                </div>
            </Card.Body>
        </Card>
    </div>
    );
}

export default Register;