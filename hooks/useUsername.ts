import { useEffect, useState } from "react"
import { useStorage } from "."
import { TOKEN_KEY } from "../config"

const useUsername = () => {
    const [ name, setName ] = useState('')
    const { getItem } = useStorage()
    useEffect(() => {
        const token = getItem(TOKEN_KEY, 'session')
        setName(JSON.parse(token).username)
    }, [])

    return name
}

export default useUsername