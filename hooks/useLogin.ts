import { useRouter } from "next/router"
import { useAxios, useStorage } from "."
import { TOKEN_KEY } from "../config"
import { LOGIN_QUERY } from "../query"

type LoginInput = {
    email:string
    password:string
}

const useLogin = (data:LoginInput) => {
    const { setItem } = useStorage()
    const router = useRouter()

    return () => {
        useAxios(LOGIN_QUERY, data, false)
        .then( res => {
            if(res.data.data.login === null){
                console.error(res.data.errors.messages)
                return
            }
            setItem(TOKEN_KEY, JSON.stringify(res.data.data.login), 'session')
            router.push('/')
        })
        .catch( e => {
            console.error(e)
        })
    }
}

export default useLogin