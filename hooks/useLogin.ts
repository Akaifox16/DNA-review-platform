import { useAxios, useStorage } from ".";
import { TOKEN_KEY } from "../config";
import { useLoginContext } from "../context";
import { LOGIN_QUERY } from "../query";

type LoginInput = {
    email:string
    password:string
}

const useLogin = async (data:LoginInput) => {
    const { setItem } = useStorage();
    const { setLogin } = useLoginContext();

    const res = await useAxios(LOGIN_QUERY, {user: data}, false)
    if( res.data.data.login === null){
        console.error(res.data.errors.messages);
        return false;
    }
    
    setLogin(true);
    setItem(TOKEN_KEY, JSON.stringify(res.data.data.login), 'session');
    return true;
}

export default useLogin;