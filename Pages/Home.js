import React from 'react'
import Gallery from '../HomeSection/Gallery/Gallery'
import DestinationHome from '../HomeSection/Destina/DestinationHome'
import Download from '../HomeSection/Download/Download'
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout'
import MostPopular from '../HomeSection/popular/MostPopular'
import Works from '../HomeSection/Work/Works'

const Home = () => {
    return(
        <>
           <Hero />
           <HomeAbout/>
           <DestinationHome/>
           <MostPopular />
            <Download /> 
            <Works/>
            <Gallery/>
            
        </>
    )
}
export default Home