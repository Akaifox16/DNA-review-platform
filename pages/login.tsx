import { useState } from "react";
import { Button, Form, Card, Alert, FloatingLabel } from "react-bootstrap";
import Link from "next/link";

import { useAlert, useLogin } from "../hooks";
import { Input } from "../components";

import styles from '../styles/Auth.module.scss';

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    }) ;
    const login = useLogin(user);
    const { alert } = useAlert();
    
    return (            
    <div className="m-5">
        <div className="text-center m-5 p-4">
                <h1>Login</h1>
                <div className="mx-md-5" >
                    {/* <Form> */}
                        <div className="m-3">
                        <Input 
                            controlId="floatingEmail"
                            label="Email"
                            type="email" 
                            onChange={e => {
                                setUser({...user, email: e.target.value});
                            }}
                        />
                        </div>
                        <div className="m-3">
                        <Input 
                            controlId="floatingPassword"
                            label="Password"
                            type="password" 
                            onChange={e => {
                                setUser({...user, password: e.target.value});
                            }}
                        />
                        </div>
                    {/* </Form> */}
                </div>
                <div className="m-3">
                    <Button 
                    className={styles.btn}
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
                <div>
                    <Link href="/register">
                        Don't have an any account yet?
                    </Link>
                </div>
            </div>
    </div>
    );
}

export default Login;