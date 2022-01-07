import Link from "next/link";
import Image from "next/image";
import Searchbar from "../Searchbar";
import styles from '../../styles/Navbar.module.scss'
import { useLoginContext, useStorage } from '../../hooks';
import { ReactElement } from "react";
import { Dropdown } from "react-bootstrap";
import { TOKEN_KEY } from "../../config";

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
    const { removeItem } = useStorage()

    return (
        <div
            className={styles.container}
        >
            <Link href='/'>
                <button 
                className={ styles.logo }
                >DNA</button>
            </Link>
            <Searchbar />
            { isLogin &&
            <div>
                <Link href='/post'><button className={ styles.post } >Posts</button></Link>
                <Link href='/point'><button className={ styles.point } >Points</button></Link>
            </div>
            }
            
            {isLogin &&
                <Dropdown>
                    <Dropdown.Toggle
                    variant="success"
                    >
                        User
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item
                        href="/user">
                            profile
                        </Dropdown.Item>
                        <Dropdown.Item
                        href="/"
                        onClick={ e => {
                            e.preventDefault()
                            removeItem(TOKEN_KEY)
                        }}>

                            logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            }
            
            {!isLogin && 
                <Link href='/login'>Login/Signup</Link>
            }
        </div>
    );
}

export default Navbar;