import React from 'react'
import { Link } from 'react-router-dom'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import AboutCard from './AboutCard'

const About = () => {
    return(
        <>
        <HeadTitle/>
            <section className='about top'>
                <div className='container'>
                    <AboutCard/>
                </div>
            </section>
            <section className='features top'>
                <div className='container aboutCard flex_space'>
                    <div className='row rowl'>
                        <h1>
                            Our<span>Features</span>
                        </h1>
                        <p>We also provide to all facilities you need and our facilities is very helpful to enjoy yor holidays</p>
                        <p>We also provide to all facilities you need and our facilities is very helpful to enjoy yor holidays</p>
                        
                        <button className='secondary-btn'>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                        <Link to='/blog'/>
                        </button>
                        
                    </div>
                    <div className='row image'>
                      <img src='/images/feature-img-1.webp' alt=''/>
                        <div className='control-btn'>
                             <button className='prev'>
                                <i className='fas fa-play'></i>
                            </button>
                        </div>
                 </div>
            </div>
            </section>
        </>
    )
}
export default About