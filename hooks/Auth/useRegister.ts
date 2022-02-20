import { useRouter } from "next/router";
import { useStorage, useAxios, useLoginContext } from "../";
import { TOKEN_KEY } from "../../config";
import { REGISTER_QUERY } from "../../lib/query";

type RegisterInput = {
    name: string,
    email: string,
    password: string,
}

const useRegister = (data:RegisterInput) => {
    const { setItem } = useStorage();
    const { setToken } = useLoginContext();
    const router = useRouter();

    return () => {        
        useAxios(REGISTER_QUERY, {user: data}, '')
        .then(res => {
            if(res.data.data.register === null) {
                console.error(res.data.errors.messages);
                return ;
            }

            setToken(res.data.data.register);
            setItem(TOKEN_KEY, JSON.stringify(res.data.data.register) ,'local');
            router.push('/');
        });
    }   ;
}

export default useRegister;

