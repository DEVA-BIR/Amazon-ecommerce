import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import {img} from './Images/Data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Classes from './Carousel.module.css'; 
function CarouselEffect() { 
  return (
    <div>
        <Carousel
            autoPlay={true}
            infiniteLoop={true} 
            showIndicators={false}
            showThumbs={false}
            >
       
        {
            img.map((imageItemLink)=>{
                return <img src={imageItemLink}/>
            })

        }
       </Carousel>
       <div className= {Classes.hero__img}></div>
    </div>
  )
}

export default CarouselEffect
