import Image from "next/image";
import styles from '../../../styles/Searchbar.module.scss';

const Searchbar = () => {
    return (
       <div className="d-flex justify-content-center h-100">
                <div className={styles.searchbar}>
               
            <input
                className={styles.search_input}
                
                placeholder='Search...'
                type='text'>

                </input>
            <a href="#" className={styles.search_icon}>
            <Image 
                            src={'/loupe.png'}
                            height={30}
                            width={30} />
                    <i className={styles.fassfa_search}>

                    </i>
                </a>
            
        </div>
       </div> 
   
    );
}

export default Searchbar;