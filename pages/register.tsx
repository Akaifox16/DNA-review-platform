import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "react-bootstrap";

import { useRegister } from "../hooks";
import { Banner } from "../components";

const register = () => {
    const [user,setUser] = useState({name: "",
                                    email: "",
                                    password: "",}) ;
    const [enable, setEnable] = useState(false) ;
    const signin = useRegister(user);

    return (
        <div>
            <Banner text='Register' />
            <form onSubmit={e => {
                e.preventDefault();
                signin();
            } } >
                <input type='text' 
                placeholder="Username"
                onChange={e => {
                    setUser({...user, name: e.target.value})
                }} />

                <input type='text' 
                placeholder="User E-mail"
                onChange={e => {
                    setUser({...user, email: e.target.value})
                }} />
                
                <input type='text' 
                placeholder="password"
                onChange={e => {
                    setUser({...user, password: e.target.value})
                }} />
                
                <input type='text' 
                placeholder="confirmation password"
                onChange={e => {
                    if (e.target.value === user.password){
                        setEnable(true)
                    }else{
                        setEnable(false)
                    }
                }} />
                
                <Button className="success" type="submit" disabled={!enable} >Register</Button>
            </form>
        </div>
    );
}

export default register;