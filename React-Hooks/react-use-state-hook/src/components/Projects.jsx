import React from 'react'
import CardData from './Data'
import Slider from 'react-slick'

function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
    <Slider {...settings}>
    <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
    </Slider>
    <div>
        {
            CardData.map((data)=>{
                return(
                    <div>
                        <h1>{data.title}</h1>
                        <img src={data.imgSrc} alt={data.imgSrc}/>
                        <h2>{data.heading}</h2>
                        <p>{data.discription}</p>
                    </div>
                )
            })
        }
    </div>
        
    </>
  )
}

export default Projects