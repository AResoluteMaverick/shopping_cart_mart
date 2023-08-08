import styles from './Footer.module.css'
import { Link } from "react-router-dom";
import facebookIcon from '../assets/icons/facebook-svgrepo-com.svg';
import instagramIcon from '../assets/icons/instagram-svgrepo-com.svg';
import twitterIcon from '../assets/icons/twitter-154-svgrepo-com.svg';
import youtubeIcon from '../assets/icons/youtube-168-svgrepo-com.svg';

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
            <Link to="/error"> <img className={styles.icon} src={twitterIcon} alt= "Twitter"  /> </Link>
            <Link to="/error"> <img className={styles.icon} src={facebookIcon} alt= "Facebook"  /> </Link>
            <Link to="/error"> <img className={styles.icon} src={instagramIcon} alt= "Instagram"  /> </Link>
            <Link to="/error"> <img className={styles.icon} src={youtubeIcon} alt= "YouTube"  /> </Link>
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