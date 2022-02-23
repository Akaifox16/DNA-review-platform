import { useState } from "react";
import { Button, Form, Card, Alert, FloatingLabel } from "react-bootstrap";
import Link from "next/link";

import { useAlert, useLogin } from "../hooks";
import { Input } from "../components";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    }) ;
    const login = useLogin(user);
    const { alert } = useAlert();
    
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
                <Card.Title><h1>Login</h1></Card.Title>
                <div className="mx-md-5" >
                    <Form>
                        <Input 
                            controlId="floatingEmail"
                            label="Email"
                            type="email" 
                            onChange={e => {
                                setUser({...user, email: e.target.value});
                            }}
                        />
                        <Input 
                            controlId="floatingPassword"
                            label="Password"
                            type="password" 
                            onChange={e => {
                                setUser({...user, password: e.target.value});
                            }}
                        />
                    </Form>
                </div>
                <div className="m-3">
                    <Button 
                    variant="success" 
                    type= "submit" 
                    size = "lg" 
                    onClick={e => {
                        e.preventDefault();
                        login();
                    }}>
                        Login
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
                <div className="m-3">
                    <Link href="/register">
                        Don't have an any account yet?
                    </Link>
                </div>
            </Card.Body>
        </Card>
    </div>
    );
}

export default Login;