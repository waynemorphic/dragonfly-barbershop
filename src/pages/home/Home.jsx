import React from 'react'
import '../home/Home.css'
import barbercut from '../../assets/barbercut.png'
import ImagesCarousel from '../../components/bootstrap/ImagesCarousel'

export default function Home() {
  return (
    <div className='home'>
        <div className='home-page'>
            <h3>Find The Best<br /> Barber Shop <span><br />for you</span></h3>
            <p className='objective'>Haircut Services For Men and Women. We will pamper your Hair, Scalp,
            Face and Body with the Best Services within Luxurious Facilities.
            </p>
            <div className='buttons'>
              <button className = 'booking-button' type='submit'>Book Now</button>
              <button className = 'booking-button' type='submit'>Watch Video</button>
            </div>
            
            <div className='details'>
              <h4><span>+20 </span> <br /> Years of Experience</h4>
              <h4 className='lines'><span >+80</span> <br /> Beauty Experts</h4>
              <h4 className='lines'><span>+20K</span> <br /> Happy Customers</h4>
            </div>                      
        </div>  
        <div>
          <ImagesCarousel />
        </div>
        {/* <div className='home-page-image'>
            <img className='stack' src = {barbercut} alt='Mike Murikui image'/>            
            <img className='stack' src = {barbercut} alt='Mike Murikui image'/> 
        </div>                 */}
    </div>
  )
}
