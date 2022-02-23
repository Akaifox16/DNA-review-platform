import Image from "next/image";
import styles from '../../../styles/Searchbar.module.scss';
import { Button } from "react-bootstrap";
import { Input } from "../..";
import { useSearchContext } from "../../../hooks";

const Searchbar = () => {
    const { setFilter } = useSearchContext();

    return (
        <div className="d-flex justify-content-center h-100">
        <div className={styles.searchbar}>
            <input 
                className={styles.search_input}
                // controlId="searchbar"
                // label=""
                type=""
                onChange={(e)=>{
                    setFilter(e.target.value);
                }}
            />
            <a href="#" className={styles.search_icon}>
            <Image 
                            src={'/loupe.png'}
                            height={30}
                            width={30} />
            <i className={styles.fassfa_search} />
            </a>
        </div>
       </div> 
   
    );
}

export default Searchbar;