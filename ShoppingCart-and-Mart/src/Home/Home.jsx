import React from 'react';
import styles from './Home.module.css'
import ProductList from '../assets/HomeProductCard/CarouselProductCard'



function DisplayHomePhoto () {
    return (
        <div className={styles.dhpContainer}></div>
    )
}

function HomeMotto () {
    return (
        <div className={styles.motto}>
            <h1 className={styles.mottoPlaceholder}>Welcome to the ensemble of the Elite</h1>
        </div>
    )
}

const MemoizedProductList = React.memo(ProductList);

function HomeCarousel () {
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.trending}>Trending</div>
            <div className={styles.carouselWrap}>
                <MemoizedProductList />
                <MemoizedProductList />
                <MemoizedProductList />
            </div>
        </div>
    )
}

function Membership () {
    return (
        <div className={styles.membershipContainer}>
          <div className={styles.membershipPhoto}></div>   
          <div className={styles.membershipSignUp}>
            <p className={styles.membershipTagline}>The Art of Elegance, the Luxury of Style: Step into the World of Lux.</p>
            <p className={styles.membershipJoinUs}>Join our Newsletter now</p>
            <input className={styles.membershipInput} type="text" placeholder="Enter your email address"/>
          </div>
        </div>
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