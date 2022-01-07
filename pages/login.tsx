import { useState } from "react";
import Link from "next/link";
import axios from "axios"

import { API_URL, TOKEN_KEY } from "../config"
import { Banner } from "../components";
import { LOGIN_QUERY } from "../query";
import { useRouter } from "next/router";
import { useLoginContext } from "../hooks";

const login = () => {
    const [user, setUser] = useState<LoginInput>({
        email: "",
        password: ""
    })
    const router = useRouter()
    const { setLogin } = useLoginContext()

    const login = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        axiosReq(user)
        .then(res => {
            console.log(res.data)
            if(res.data.data.login === null) {
                console.error(res.data.errors.messages)
                return
            }
            sessionStorage.setItem(TOKEN_KEY,JSON.stringify(res.data.data.login))
            setLogin(true)
            router.push('/')
        })
        .catch(e => {
            console.error(e)
        })
    }

    return (
        <div>
            <Banner text='Login' />
            <form onSubmit={ login } >
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

                <button type="submit">Login</button>
                <p>Don't have account yet?</p>
                <Link href='/register'>
                    <button type="submit">Create new DNA Account</button>
                </Link>
            </form>
        </div>
    );
}

type LoginInput = {
    email:string
    password:string
}

const axiosReq = (user: LoginInput) => {
    const headers = {
        "content-type": "application/json" 
    }

    return axios({
        url: API_URL,
        method: 'post',
        headers,
        data:{
            query: LOGIN_QUERY,
            variables:{
                user
            }
        }
    })
}

export default login;
