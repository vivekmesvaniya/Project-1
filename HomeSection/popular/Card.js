import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PopularData from './PopData'
import Slider from 'react-slick'
import "./MostPopular.css"


export const Card = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <>
    <Slider {...settings}>
    { PopularData.map((value) => {
        return (  
       <div className='cards'>
        <div className='item'>
            <div className='popular img'>
                <img src={(value.image)} alt=''/>
                <i className='fas fa-map-marker-alt'></i>
                <label>{value.country}</label>
            </div>
            <div className='rate'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
            </div>
            <div className='detail'>
                <h2>{value.name}</h2>
                <div className='border'></div>
                <h3>
                  {value.price} / <span>Per Night</span>
                </h3>
            </div>
        </div>
        </div>
        )
        })
    } 
    </Slider>
    </>
  )
}
export default Card