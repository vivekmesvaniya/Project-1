import React from 'react'
import Card from '../popular/Card'
import "./MostPopular.css"

export const MostPopular = () => {
  return (
    <>
       <section className='popular-top'>
        <div className='full_container'>
            <div className='heading'>
                <h1>Most Popular Hotels</h1>
                <div className='line'></div>
            </div>
            <div className='content'>
                <Card/>
            </div>
        </div>
       </section>
    </>
  )
}
export default MostPopular