import styles from './Footer.module.css'
import { Link } from "react-router-dom";

function FooterLinks () {
    return (
        <div className={styles.linkContainer}>
            <div>
                <div className={styles.dummyTitle}>COMPANY</div>
                <ul className={styles.dummyLinks}>
                    <li><Link to="/error">About Us</Link></li>
                    <li><Link to="/error">Our Team</Link></li>
                    <li><Link to="/error">Careers</Link></li>
                    <li><Link to="/error">Contact</Link></li>
                </ul>
            </div>

            <div>
                <div className={styles.dummyTitle}>RESOURCES</div>
                <ul className={styles.dummyLinks}>
                    <li><Link to="/error">Blog</Link></li>
                    <li><Link to="/error">News</Link></li>
                    <li><Link to="/error">Support</Link></li>
                    <li><Link to="/error">FAQs</Link></li>
                </ul>
            </div>

            <div>
                <div className={styles.dummyTitle}>SHOP</div>
                <ul className={styles.dummyLinks}>
                    <li><Link to="/error">Products</Link></li>
                    <li><Link to="/error">Categories</Link></li>
                    <li><Link to="/error">Cart</Link></li>
                    <li><Link to="/error">Account</Link></li>
                </ul>
            </div>
        </div>
    )
}

function SocialIcons () {
    return (
        <div className={styles.socialLinks}>
        <div className="twitter socials">T</div>
        <div className="facebook socials">F</div>
        <div className="youtube socials">Y</div>
        <div className="instagram socials">I</div>
        </div>
    )
}


export default function Footer () {
    return (
        <footer className={styles.footerContainer}>
            <FooterLinks />
            <SocialIcons />
        </footer>
    )
}