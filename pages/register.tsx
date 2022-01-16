import { Banner, Button } from "../components";
import { useState } from "react";
import { useRegister } from "../hooks";
import { useRouter } from "next/router";

const register = () => {
    const [user,setUser] = useState({name: "",
                                    email: "",
                                    password: "",}) ;
    const [enable, setEnable] = useState(false) ;
    const router = useRouter() ;

    const signin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault() ;
        
        if(enable){
            const complete = await useRegister(user) ;
            if(complete) router.push('/') ;
        }
    }    

    return (
        <div>
            <Banner text='Register' />
            <form onSubmit={ signin } >
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
                
                <Button name={"Register"} type={"submit"}/>
            </form>
        </div>
    );
}

export default register;