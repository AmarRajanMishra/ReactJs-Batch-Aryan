import React from 'react'
import Common from '../components/Common'

function Home() {
    let homeData = {
        imgSrc : 'myHomeImg',
        discription : 'This Is Home Content'
    }
  return (
    <div>
        <Common data={homeData} />
    </div>
  )
}

export default Home