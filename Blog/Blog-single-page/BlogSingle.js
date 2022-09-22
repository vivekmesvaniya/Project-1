import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import HeadTitle from '../../../common/HeadTitle/HeadTitle'
import EmptyFile from '../../../common/EmptyFile/EmptyFile'
import BlogData from '../BlogData'

const BlogSingle = () => {
  const { id } = useParams()
  const [items,setItems] = useState(null)
  useEffect(() => {
    let items = BlogData.find((items) => items.id === parseInt(id))
    if(items){
      setItems(items)
    }
  }, [id])
  return (
    <>
      <HeadTitle />
 {items ? (
       <section className='single-page-top'>
        <div className='container'>
          <Link to='/blog' className='primary-btn back'>
            <i className='fas fa-long-arrow-alt-left'></i>Go Back
          </Link>
          <article className='content flex'>
            <div className='main-content'>
              <img src={items.cover} alt=''/>
           
            <div className='category flex_space'>
              <span>{items.date}</span>
              <label>{items.category}</label>
            </div>
            <h1>{items.title}</h1>
            <p>{items.desc}</p>
            <p>{items.desc}</p>

            <h2>Two Column Text Sample</h2>
            <div className='para flex_space'>
               <span>{items.para}</span>
               <label>{items.para}</label>
            </div>
              < div className='side-content'>
                <div className='category-list'>
                  <h2>category</h2>
                   <hr/>
                   <ul>
                    {
                      BlogData.map((items) =>{
                      return(
                        <li>
                          <i className='far fa-play-circle'></i>
                          {items.category}
                        </li>
                      )
                      })}
                   </ul>   
              </div>
            </div>
            </div>
          </article>
        </div>
        </section>
      ) : (
         <EmptyFile/>
      )
  }
   </>
  )
}
export default BlogSingle
