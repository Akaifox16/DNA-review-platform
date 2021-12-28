const Banner = () => {
    return (
        <div>
            Login
        </div>
    )
}

const LoginForm = () => {
    return (
        <div>
            <Banner />
            <form >
                <input type='text' 
                placeholder="User E-mail"/>
                <input type='text' 
                placeholder="password"/>

                <button type="submit">Login</button>
                <p>Don't have account yet?</p>
                <button type="submit">Create new DNA Account</button>
            </form>

        </div>
    );
}

export default LoginForm;