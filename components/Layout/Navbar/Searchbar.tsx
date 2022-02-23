import { Button } from "react-bootstrap";
import { Input } from "../..";
import { useSearchContext } from "../../../hooks";

const Searchbar = () => {
    const { setFilter } = useSearchContext();

    return (
        <div>
            <Input 
                controlId="searchbar"
                label=""
                type=""
                onChange={(e)=>{
                    setFilter(e.target.value);
                }}
            />
            <Button>
                search
            </Button>
        </div>
    );
}

export default Searchbar;