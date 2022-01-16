import { useStorage, useAxios, useLoginContext } from ".";
import { TOKEN_KEY } from "../config";
import { REGISTER_QUERY } from "../query";

type RegisterInput = {
    name: string,
    email: string,
    password: string,
}

const useRegister = async (data:RegisterInput) => {
    const { setItem } = useStorage();
    const { setLogin } = useLoginContext();

    const res = await useAxios(REGISTER_QUERY, data, false);
    if(res.data.data.register === null) {
        console.error(res.data.errors.messages);
        return false;
    }
    setLogin(true);
    setItem(TOKEN_KEY, JSON.stringify(res.data.data.register) ,'session');
    return true;
}

export default useRegister;