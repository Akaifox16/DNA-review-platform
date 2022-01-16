import { useEffect } from "react";
import { useLoginContext, useStorage } from ".";
import { TOKEN_KEY } from "../config";

const useDetectUser = () => {
    const { setLogin } = useLoginContext();
    const { getItem } = useStorage();
    useEffect(() => {
        const token = getItem(TOKEN_KEY, 'session');
        if(token){
            setLogin(true);
        }else{
            setLogin(false);
        }
    }, []);
}

export default useDetectUser;