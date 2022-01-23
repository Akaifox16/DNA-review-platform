const useToken = (token:string) => {
    return {Authorization : 'Bearer ' + token}
}

export default useToken;