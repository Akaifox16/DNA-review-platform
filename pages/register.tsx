import { Banner, Button } from "../components";
import { useState } from "react";
import { useRegister } from "../hooks";


const register = () => {
    const [user,setUser] = useState({name: "",
                                    email: "",
                                    password: "",})
    const [enable, setEnable] = useState(false)
    
    const signin = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const register = useRegister(user)

        if(enable){
            register()
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