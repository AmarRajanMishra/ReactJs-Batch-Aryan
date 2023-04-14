import React from 'react'
import Common from '../components/Common'

function About() {
    let aboutData = {
        imgSrc : 'myAboutImg',
        discription : 'This Is About Content'
    }
  return (
    <div>
        <Common data={aboutData} />
    </div>
  )
}

export default About