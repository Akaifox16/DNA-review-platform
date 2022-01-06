import { createContext } from 'react'

export type LoginContent = {
    isLogin: boolean
    setLogin: (login: boolean) => void
}

export const LoginContext = createContext<LoginContent>({
    isLogin: false,
    setLogin: () => {},
})