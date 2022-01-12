import { useRouter } from "next/router"
import { useLoginContext, useStorage, useAxios } from "."
import { TOKEN_KEY } from "../config"
import { REGISTER_QUERY } from "../query"

type RegisterInput = {
    name: string,
    email: string,
    password: string,
}

const useRegister = (data:RegisterInput) => {
    // const { setLogin } = useLoginContext()
    const { setItem } = useStorage()
    const router = useRouter()

    return () => {
        useAxios(REGISTER_QUERY, data, false)
        .then( res => {
            if(res.data.data.register === null) {
                console.error(res.data.errors.messages)
                return
            }
            setItem(TOKEN_KEY, JSON.stringify(res.data.data.register) ,'session')
            router.push('/')
        })
        .catch( e => {
            console.error(e)
        })
    }
}

export default useRegister