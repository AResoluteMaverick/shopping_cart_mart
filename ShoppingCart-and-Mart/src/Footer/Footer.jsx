import styles from './Footer.module.css'
import { Link } from "react-router-dom";

function FooterLinks () {
    return (
        <div className={styles.linkContainer}>
            <div>
                <div className = {styles.dummyTitle}>This is a Title</div>
                <ul className = {styles.dummyLinks}>
                    <li><Link to="/error">This is a link</Link></li>
                    <li><Link to="/error">This is a Link</Link></li>
                    <li><Link to="/error">This is a Link</Link></li>
                    <li><Link to="/error">This is a LInk</Link></li>
                </ul>
            </div>

            <div>
                <div className = {styles.dummyTitle}>This is a Title</div>
                <ul className = {styles.dummyLinks}>
                    <li><Link to="/error">This is a link</Link></li>
                    <li><Link to="/error">This is a Link</Link></li>
                    <li><Link to="/error">This is a Link</Link></li>
                    <li><Link to="/error">This is a LInk</Link></li>
                </ul>
            </div>

            <div>
                <div className = {styles.dummyTitle}>This is a Title</div>
                <ul className = {styles.dummyLinks}>
                    <li><Link to="/error">This is a link</Link></li>
                    <li><Link to="/error">This is a Link</Link></li>
                    <li><Link to="/error">This is a Link</Link></li>
                    <li><Link to="/error">This is a LInk</Link></li>
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