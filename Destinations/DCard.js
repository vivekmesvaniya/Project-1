import React from 'react'
import { Link } from 'react-router-dom'

const DCard = ({item:{id,image,title,desc,sidepara,paraImage_one,paraImage_two}}) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
            <img src={image} alt=''/>
            <Link to='../../SinglePage/SinglePage.js'>
            <i>transfer</i>
            </Link>
        </div>
        <div className='title'>
            <h3>{title}</h3>
        </div>
      </div>
    </>
  )
}

export default DCard
