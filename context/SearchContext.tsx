import { createContext } from "react"

export type SearchContent = {
    filter: string
    setFilter: (filter: string) => void
}

export const SearchContext = createContext<SearchContent>({
    filter: "",
    setFilter: () => {}
});