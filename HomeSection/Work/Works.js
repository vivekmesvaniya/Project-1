import React from 'react'
import Card from '../Work/Card'
import WData from './WData'
import "./Work.css"

const Works = () => {
  return (
    <>
       <section className='popular works'>
        <div className='container'>
            <div className='heading'>
                <h1>How it Works</h1>
                <div className='line'></div>
            </div>
            <div className='content grid'>
                {WData.map((value,index) =>{
                    return <Card key={index} cover = {value.cover} title={value.title} desc={value.desc}/>
                })}
            </div>
        </div>
       </section>
    </>
  )
}

export default Works