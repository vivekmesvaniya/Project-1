import React from 'react'
import "./Download.css"

const Download = () => {
  return (
    <>
       <section className='download top'>
        <div className='container flex_space'>
            <div className='row'>
                <h3>Download Our App</h3>
                <h1>Wow ! Get This Template App For Your Mobile</h1>
                <ul>
                    <li>&#10003; GET PAPERLESS CONFIRMATION </li>
                    <li>&#10003; GET PAPERLESS CONFIRMATION </li>
                    <li>&#10003; GET PAPERLESS CONFIRMATION </li>
                    <li>&#10003; GET PAPERLESS CONFIRMATION </li>
                    <li>&#10003; GET PAPERLESS CONFIRMATION </li>
                    <li>&#10003; GET PAPERLESS CONFIRMATION </li>
                    <li>&#10003; GET PAPERLESS CONFIRMATION </li>
                    <li>&#10003; GET PAPERLESS CONFIRMATION </li>
                </ul>
                <div className='img flex'>
                    <img src='/images/PlayStore-logo.webp' width={'110px'} alt=''/>
                </div>
            </div>
            <div className='row row2'>
                <img src='/images/app-image-1.jpg' width={'100%'} height={'100%'} alt=''/>
            </div>
        </div>
       </section>

    </>
  )
}

export default Download