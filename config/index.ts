const API_URL:string = "http://localhost:5000/graphql"
const TOKEN_KEY:string = "token"
const HEADER = {
    "content-type": "application/json" 
}
const AUTHORIZATION = ( token:string ) => {
    return {Authorization : token}
}

export { API_URL, TOKEN_KEY, HEADER, AUTHORIZATION }