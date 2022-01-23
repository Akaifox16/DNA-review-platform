import { useUsername } from ".";

const useOwnerChecker = ( author: string ) => {
    const username = useUsername();
    let owner = false;
    if(username === author){
        owner = true;
    } 

    return owner;
}

export default useOwnerChecker