import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import carticon from '../assets/icons/shopping-bag-svgrepo-com.svg';
import { cartSlice } from '../Store/cartSlice';


export default function Title () {
    const cart = useSelector((state) => state[cartSlice.name]);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  

    return (
        <div className={styles.titleDiv}>
            <Link to="/">
                <h1 className={styles.LogoTitle}>Lux</h1>
            </Link>
            <Link to="/cart" className={styles.cartIconContainer}> 
                <img src={carticon} alt="shoppingcart" className={styles.cartIcon}/> 
                {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
            </Link>
        </div>
    )
}