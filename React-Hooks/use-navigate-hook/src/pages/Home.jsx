import React from 'react'
import {  useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const goto = (e)=>{
    //
    e.preventDefault() 
    // console.log('Hello')
    navigate('/contact')
  }
  return (
    <div>
        <h1>Home page</h1>
        <form onSubmit={goto}>
            <input type={'submit'} value='Submit' />
        </form>
    </div>
  )
}

export default Home