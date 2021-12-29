import Banner from "../components/Banner";

const register = () => {
    

    return (
        <div>
            <Banner text='Register' />
            <form >
                <input type='text' 
                placeholder="User E-mail"/>
                <input type='text' 
                placeholder="password"/>
                <input type='text' 
                placeholder="confirmation password"/>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default register;