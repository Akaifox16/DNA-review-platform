import { useLoginContext } from "..";

const useAuthChecker =  () => {
    const { token } = useLoginContext();
    let isLogin: Boolean;
    if(token.username === ''){
        isLogin = false;
    }else{
        isLogin = true;
    }

    return { isLogin, token };
}

export default useAuthChecker;