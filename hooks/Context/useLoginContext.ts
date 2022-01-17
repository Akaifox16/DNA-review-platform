import { useContext } from "react";
import { LoginContext } from "../../context";

const useLoginContext = () => { 
    return useContext(LoginContext);

};

export default useLoginContext ;