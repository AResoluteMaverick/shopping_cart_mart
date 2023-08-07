import styles from './Header.module.css'
import { Link } from "react-router-dom";


export default function Title () {
    return (
        <div className={styles.titleDiv}>
            <h1 className={styles.LogoTitle}>Lux</h1>
            <Link to="/cart">Cart</Link>
        </div>
    )
}