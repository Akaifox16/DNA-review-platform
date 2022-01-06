import { Banner, Button } from "../components";
import { useState } from "react";
import axios from 'axios'
import { API_URL } from "../config";
import { REGISTER_QUERY } from "../query";
import { useLoginContext } from "../hooks";
import { useRouter } from "next/router";

const register = () => {
    const [user,setUser] = useState({name: "",
                                    email: "",
                                    password: "",})
    const [enable, setEnable] = useState(false)
    const { setLogin } = useLoginContext()
    const router = useRouter()
    
    const signin = (e: { preventDefault: () => void; }) => {
        e.preventDefault()


        if(enable){
            axiosReq(user)
            .then(res => {
                console.log(res.data)
                if(res.data.data.register === null) {
                    console.error(res.data.errors.messages)
                    return
                }
                sessionStorage.setItem('token',JSON.stringify(res.data.data.register))
                setLogin(true)
                router.push('/')
            }).catch(e => {
                console.error(e)
            })
        }
    }    

    return (
        <div>
            <Banner text='Register' />
            <form onSubmit={signin} >
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

type RegisterInput = {
    name: string,
    email: string,
    password: string,
}

const axiosReq = (user:RegisterInput) => {
    const headers = {
        "content-type": "application/json" 
    }

    return axios({
        url: API_URL,
        method: 'post',
        headers,
        data:{
            query: REGISTER_QUERY,
            variables:{
                user
            }
        }
    })
}

export default register;