import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./ErrorPage.module.css"

export default function ErrorPage () {
    return (
       <>
       <Header />
       <div className={styles.errorComponent}>This is an error page, and this error is by design
       </div>
       <Footer />
       </>
    )
}