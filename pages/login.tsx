import Link from "next/link";
import Banner from "../components/Banner";

const login = () => {
    return (
        <div>
            <Banner text='Login' />
            <form >
                <input type='text' 
                placeholder="User E-mail"/>
                <input type='text' 
                placeholder="password"/>

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