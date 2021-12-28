import Link from "next/link";
import Image from "next/image";
import Searchbar from "../Searchbar";
import styles from '../../styles/Navbar.module.scss'
import { useLoginContext } from '../../context/LoginContext';
import { ReactElement } from "react";

const UserImg:({link}:{link:string})=>ReactElement = ({ link }) => {
    return (
        <Link href={link} >
            <button className={ styles.user } >
                <Image src='/user.png' 
                width={32} 
                height={32} 
                className={ styles.img }/>
            </button>
        </Link>
    )
}

const Navbar = () => {
    const { isLogin } = useLoginContext()

    return (
        <div
            className={styles.container}
        >
            <Link href='/'><button className={ styles.logo }>DNA</button></Link>
            <Searchbar />
            { isLogin &&
            <div>
                <Link href='/posts'><button className={ styles.post } >Posts</button></Link>
                <Link href='/points'><button className={ styles.point } >Points</button></Link>
            </div>
            }
            
            {isLogin && 
                <UserImg link='/user'/>
            }
            
            {!isLogin && 
                <UserImg link='/login'/>
            }
        </div>
    );
}

export default Navbar;