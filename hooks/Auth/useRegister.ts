import { useRouter } from "next/router";
import { useStorage, useAxios, useLoginContext } from "../";
import { TOKEN_KEY } from "../../config";
import { REGISTER_QUERY } from "../../query";

type RegisterInput = {
    name: string,
    email: string,
    password: string,
}

const useRegister = (data:RegisterInput) => {
    const { setItem } = useStorage();
    const { setLogin } = useLoginContext();
    const router = useRouter();

    return () => {        
        useAxios(REGISTER_QUERY, {user: data}, false)
        .then(res => {
            if(res.data.data.register === null) {
                console.error(res.data.errors.messages);
                return ;
            }

            setLogin(true);
            setItem(TOKEN_KEY, JSON.stringify(res.data.data.register) ,'session');
            router.push('/');
        });
    }   ;
}

export default useRegister;