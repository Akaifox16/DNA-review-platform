import { useStorage } from ".";
import { TOKEN_KEY } from "../config";

const useUsername = () => {
    let name
    const { getItem } = useStorage();
    const token = getItem(TOKEN_KEY, 'session');
    // console.log(token)
    name =  token === undefined || token === ''
    ? ''
    : JSON.parse(token).username; 
    
    return name;
}

export default useUsername;