import axios from "axios";
import { API_URL, HEADER } from "../config";
import { useToken } from ".";

const useAxios = async ( query:string, variableInput:Object, token: string) => {
    const { Authorization } = useToken(token);
    const headers = token === '' 
                    ? { ...HEADER } 
                    : { ...HEADER, Authorization };

    // console.log({...variableInput});
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