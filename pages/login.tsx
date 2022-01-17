import { useState } from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

import { Banner } from "../components";
import { useLogin } from "../hooks";

const login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    }) ;
    const login = useLogin(user);

    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault() ;
        login();
    }

    return (
        <div>
            <Banner text='Login' />
            <form onSubmit={ submit } >
                <input type='text' 
                placeholder="User E-mail"
                onChange={e => {
                    setUser({ ...user, email: e.target.value })
                }}/>
                <input type='text' 
                placeholder="password"
                onChange={e => {
                    setUser({ ...user, password: e.target.value })
                }}
                />

                <Button className="success" >Login</Button>
                <p>Don't have account yet?</p>
                <Link href='/register'>
                    <Button className="outline-success" >Create new DNA Account</Button>
                </Link>
            </form>
        </div>
    );
}

export default login;