import { useState } from "react";
import Link from "next/link";

import { TOKEN_KEY } from "../config"
import { Banner } from "../components";
import { useLogin } from "../hooks";

const login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const login = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const login = useLogin(user)
        login()
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

export default login;
