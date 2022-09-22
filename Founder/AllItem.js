import React from 'react'
import Card from './Card'
import TData from './TData'
import "./Founder.css"
const AllItem = () => {
  return (
    <>
       <section className='Founder mtop'>
        <div className='container grid1'>
          {TData.map((value,index) =>{
            return <Card key={index} {...value}/>
          })}
        </div>
       </section>
    </>
  )
}

export default AllItem