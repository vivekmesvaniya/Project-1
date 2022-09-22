import React, { useState } from 'react'
import DCard from './DCard'
import SData from './SData'

const AllItem = () => {
    const [items,setItem] = useState(SData)
  return (
    <>
      <section className='gallery desi mtop'>
        <div className='container'>
            <div className='content grid'>
                { items.map((item) => {
                        return <DCard key={items.id} item={item} />
                    })}
            </div>
        </div>
      </section>
    </>
  )
}

export default AllItem
