import { useEffect } from "react";
import { useStorage, useLoginContext } from ".";
import { TOKEN_KEY } from "../config";

const useDetectUser = () => {
    const { setToken } = useLoginContext();
    const { getItem } = useStorage();
    useEffect(() => {
        const token = getItem(TOKEN_KEY, 'session');
        if(token){
            setToken(JSON.parse(token));
        }else{
            setToken({token: '', username: ''});
        }
    }, []);
}

export default useDetectUser;