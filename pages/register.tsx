import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Alert, Card, Form, FloatingLabel } from "react-bootstrap";
import Link from 'next/link'

import { useAlert, useRegister } from "../hooks";

const register = () => {
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
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Username"
                            className="mb-3" >
                            <Form.Control 
                            placeholder="User name" 
                            onChange={
                                e =>{
                                    setUser({...user, name: e.target.value});
                                }
                            }/>
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email"
                            className="mb-3" >
                            <Form.Control 
                            type="email" 
                            placeholder="Email" 
                            onChange={
                                e =>{
                                    setUser({...user, email: e.target.value});
                                }
                            }/>
                        </FloatingLabel>
                        <FloatingLabel 
                            controlId="floatingPassword" 
                            label="Password">
                            <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            onChange={
                                e =>{
                                    setUser({...user, password: e.target.value})
                                }
                            }/>
                        </FloatingLabel>
                        <FloatingLabel 
                            controlId="floatingPassword" 
                            label="Confirm Password">
                            <Form.Control 
                            type="password" 
                            placeholder="Confirm Password" 
                            onChange={
                                e => {
                                    if (e.target.value === user.password){
                                        setEnable(false);
                                    }else{
                                        setEnable(true);
                                    }
                                }
                            }/>
                        </FloatingLabel>
                    </Form>
                </div>
                <div className="m-3">
                    <Button 
                    variant="success" 
                    type= "submit" 
                    size = "lg" 
                    disabled={ disable }
                    onClick={e => {
                        e.preventDefault()
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
            </Card.Body>
        </Card>
    </div>
    );
}

export default register;