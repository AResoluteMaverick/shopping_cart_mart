
function DisplayHomePhoto () {
    return (
        <div className="dhpContainer">This is my Photo</div>
    )
}

function HomeMotto () {
    return (
        <div className="motto">This is my Motto</div>
    )
}


function HomeCarousel () {
    return (
        <div className="carouselContainer">
            <div className="trending">Trending</div>
            <div className="carousel">This is the Carousel</div>
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
      <div>
          <DisplayHomePhoto />
          <HomeMotto />
          <HomeCarousel />
          <Membership />
      </div>
   )
}