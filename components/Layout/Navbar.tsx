import Link from "next/link";
import Image from "next/image";
import Searchbar from "../Searchbar";
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div
            className={styles.container}
        >
            <Link href='/'><button className={ styles.logo }>DNA</button></Link>
            <Searchbar />
            <Link href='/posts'><button className={ styles.post } >Posts</button></Link>
            <Link href='/points'><button className={ styles.point } >Points</button></Link>
            <Link href='/points'>
                <div className={ styles.user } >
                    <Image src='/user.png' width={32} height={32} className={ styles.img }/>
                </div>
            </Link>
        </div>
    );
}

export default Navbar;