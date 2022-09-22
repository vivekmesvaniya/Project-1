import React from 'react'
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row rowl'>
          <h4>About Us</h4>
          <h1>We<span>provide Solution</span>to grow your business</h1>
          <p>We are also provide so many famous hotes any many more facilities in over hotels and we also respect your all things</p>
          <p>We are also provide so many famous hotes any many more facilities in over hotels and we also respect your all things</p>
          <button className='secondary-btn'>
          Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
             <img src='/images/about-img-1.jpeg' alt=''/>
             <div className='control-btn'>
               <button className='prev'>
               <i className='fas fa-play'></i>
               </button>
             </div>
        </div>
      </div>
    </>
  )
}
export default AboutCard
