import styles from '../styles/Searchbar.module.css'

const Searchbar = () => {
    return (
        <div>
            <input
                className={ styles.bar }
                placeholder='Search'
                type='text'
            />
        </div>
    );
}

export default Searchbar;