import { createContext } from 'react';
import { Token } from '../lib/type';

export type LoginContent = {
    token: Token
    setToken: (login: Token) => void
};

export const LoginContext = createContext<LoginContent>({
    token: {token: '', username: ''},
    setToken: () => {},
});