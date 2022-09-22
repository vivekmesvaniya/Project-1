import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import './Design.css'

const Login = () => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[allValue,setAllValue] = useState([])
    const formSubmit = (e) =>{
        e.preventDefault()
        const newValue = {email,password}
        setAllValue([...allValue,newValue])

        setEmail('')
        setPassword('')
    }
  return (
    <>
    <HeadTitle/>
      <section className='forms top'>
        <div className='container'>
            <div className='sign-box'>
                <p>Enter your Email and Password to Log in your Account</p>
                <form onSubmit={formSubmit}>
                    <input type='text' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type='password' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <div className='flex_space'>
                        <div className='flex'>
                            <input type='checkbox'/>
                            <label>Remeber Me</label>
                        </div>
                        <div className='flex'>
                            <span>I Forget My Password</span>
                        </div>
                        </div>

                        <button type='submit' className='primary-btn'>Sign In</button>
                        <p>Dont Have Account ? <Link to='/register'>Sign up</Link></p>
                    
                </form>
            </div>
        </div>
        </section>

        <section className='show-data'>
        {allValue.map((currentValue) =>{
            const{email,password} = currentValue
            return(
            <div className='sign-box'>
                <h1>Login Sucessfully</h1>
                <h3>Email Address : <p>{email}</p></h3>
                <h3>Password : <p>{password}</p></h3>
            </div>
            )
         })}
       </section>

    </>
  )
}

export default Login