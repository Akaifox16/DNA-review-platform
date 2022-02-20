import { useRouter } from "next/router";
import { useAxios, useStorage, useLoginContext } from "../";
import { TOKEN_KEY } from "../../config";
import { LOGIN_QUERY } from "../../lib/query";

type LoginInput = {
    email:string
    password:string
}

const useLogin = (data:LoginInput) => {
    const { setItem } = useStorage();
    const { setToken } = useLoginContext();
    const router = useRouter();

    return () => {

        // console.log('login');
        useAxios(LOGIN_QUERY, {user: data}, '')
        .then(res => {
            if( res.data.data.login === null){
                console.error(res.data.errors.messages);
                return ;
            }

            setToken(res.data.data.login);
            setItem(TOKEN_KEY, JSON.stringify(res.data.data.login), 'local');
            router.push('/');
        });
    };
}

export default useLogin;