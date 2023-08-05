import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Collection.module.css";
import { Outlet, Link } from 'react-router-dom';


function DisplayCollectionPhoto () {
    return (
        <div className={styles.displayCollectionDescription}>
            <div className={styles.collectionDescription}>
                <h1>Collections</h1>
                <p>As you delve into this realm, you will discover how luxury is reimagined and transformed from an abstract concept into tangible works of art. The  <span className={styles.highlight}>The Lux collection</span> is not just an assortment of apparel and accessories, but a curation of masterpieces that capture the essence of style and opulence.</p>
            </div>
           <div className={styles.collectionPhoto}>
           </div>
        </div>
    )
}

function DisplayProductArea () {
    return (
        <div className={styles.productArea}>
            <nav className={styles.productNavigation}>
              <Link to="all" className={styles.displayAllProducts}>All</Link>
              <Link to="jewelrycollection" className={styles.displayJewelryProducts}>Jewelry</Link>
              <Link to="mencollection" className={styles.displayMensCollection}>Men&apos;s Collection</Link>
              <Link to="womencollection" className={styles.displayWomensCollection}>Women&apos;s Collection</Link>
            </nav>
            <div className={styles.displayProductCards}>
                <Outlet />
            </div>
        </div>
    )
}

export default function Collection () {
    return (
        <>
          <Header />
            <div className={styles.collectionsComponent}>
            <DisplayCollectionPhoto />
            <DisplayProductArea />
            </div>
          <Footer />
        </>
    )
}