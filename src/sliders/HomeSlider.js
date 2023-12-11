import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"

import Screen1 from '../logos/screen1.webp'
import Screen2 from '../logos/screen2.webp'
import Screen3 from '../logos/screen3.webp'
import Screen4 from '../logos/screen4.webp'
import Screen5 from '../logos/screen5.webp'

const HomeSlider = () => {
  return (
   
       <Carousel infiniteLoop autoPlay showThumbs={false}>
            <div className='image'>
            <img src={Screen1} alt='Screen1' className=' h-48 md:h-auto'/>
            </div>
            <div className='image'>
            <img src={Screen2} alt='Screen2' className=' h-48 md:h-auto'/>
            </div>
            <div className='image'>
            <img src={Screen3} alt='SScreen3' className=' h-48 md:h-auto'/>
            </div>
            <div className='image'>
            <img src={Screen4} alt='Screen4' className=' h-48 md:h-auto'/>
            </div>
            <div className='image'>
            <img src={Screen5} alt='Screen5' className=' h-48 md:h-auto'/>
            </div>
          
          </Carousel>
         
  )
}

export default HomeSlider
