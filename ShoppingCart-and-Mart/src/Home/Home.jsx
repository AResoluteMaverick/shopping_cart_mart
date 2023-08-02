import React from 'react';
import styles from './Home.module.css'
import ProductList from '../assets/ProductCard'



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