import { useContext } from "react"
import { SearchContext } from "../../context"

const useSearchContext =() => {
    return useContext(SearchContext);
};

export default useSearchContext;