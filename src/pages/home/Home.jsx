import React from 'react'
import '../home/Home.css'
import shop from '../../assets/shop.jpg'

export default function Home() {
  return (
    <div className='home'>
        <div className='home-page'>
            <h3>We are looking to make you <span>handsome</span></h3>
            <p>You will leave looking sharp, relaxed and ready to 
                take on the world with that swagger in your stride
            </p>
            <button type='submit'>Get Started</button>
            <img  alt='Dragonfly barbershop logo' />
            <h4>#1 Nairobi Best Barber</h4>
            <p>Reviews with starts appear here</p>
        </div>
        <div className='home-page-image'>
            <img src = {shop} alt='Mike Murikui image'/>
            <p>card with review</p>
            <p>card with a review appears here</p>
        </div>
        
    </div>
  )
}
