import styles from './Home.module.css'

function DisplayHomePhoto () {
    return (
        <div className={styles.dhpContainer}></div>
    )
}

function HomeMotto () {
    return (
        <div className={styles.motto}></div>
    )
}


function HomeCarousel () {
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.trending}>Trending</div>
            <div className="carousel"></div>
        </div>
    )
}

function Membership () {
    return (
        <div className="membershipContainer">Sign-up at</div>
    )
}



export default function Home () {
   return ( 
      <div className={styles.homeComponent}>
          <DisplayHomePhoto />
          <HomeMotto />
          <HomeCarousel />
          <Membership />
      </div>
   )
}