import styles from './Header.module.css'
import { Link } from "react-router-dom";
import carticon from '../assets/icons/shopping-bag-svgrepo-com.svg';


export default function Title () {
    return (
        <div className={styles.titleDiv}>
            <Link to="/">
                <h1 className={styles.LogoTitle}>Lux</h1>
            </Link>
            <Link to="/cart"> <img src={carticon} alt="shoppingcart" className={styles.cartIcon}/> </Link>
        </div>
    )
}