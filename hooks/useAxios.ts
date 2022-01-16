import axios from "axios";
import { useStorage } from ".";
import { API_URL, AUTHORIZATION, HEADER, TOKEN_KEY } from "../config";

const useAxios = ( query:string, variableInput:Object, requireAuth:boolean) => {
    const { getItem } = useStorage();
    const token = getItem(TOKEN_KEY, 'session');
    const { Authorization } = AUTHORIZATION( token );
    const headers = requireAuth ? { ...HEADER, Authorization } : { ...HEADER };

    console.log({...variableInput});

    return axios({
        url: API_URL,
        method: 'post',
        headers,
        data:{
            query,
            variables : variableInput
        }
    });
}

export default useAxios;