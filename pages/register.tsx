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
        <div className="m-5 p-4">
        <div className="text-center m-5">
                <h1>Register</h1>
                <div className="mx-md-5" >
                    <div className="m-3">
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
                    </div>
                    <div className="m-3">
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
                    </div>
                    <div className="m-3">
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
                    </div>
                    <div className="m-3">
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
                    </div>
                    <div className="m-5">
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
                </div>
        </div>
    </div>
    );
}

export default Register;