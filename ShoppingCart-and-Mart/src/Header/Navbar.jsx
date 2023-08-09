import { Link } from "react-router-dom";
import styles from './Header.module.css'

export default function Navbar () {
    return (
    <nav className={styles.navBar}>
      <ul className={styles.headerli}>
        <li><Link className={styles.link} to="/">Home</Link></li>
        <li><Link className={styles.link} to="/collection">Collection</Link></li>
        <li><Link className={styles.link} to="/aboutus">About Us</Link></li>
      </ul>
    </nav>
    )
}