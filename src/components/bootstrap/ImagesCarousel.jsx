import  Carousel from "react-bootstrap/Carousel";
import barbercut from '../../assets/barbercut.png'
import shop from '../../assets/shop.jpg'

import './ImagesCarousel.css'


export default function ImagesCarousel() {
  return (
    <Carousel fade = {true} indicators = {false} controls = {true} className="carousel-images">
        <Carousel.Item>
            <img className="d-block w-100" src={barbercut} alt="barber shop image 1" />           
        </Carousel.Item>  
        `{console.log(Carousel.Item)}`
     

        <Carousel.Item>
            <img className = "d-block w-100" src={shop} alt="barber shop image 2"/>
            <Carousel.Caption>
                <h3>Second Caption</h3>
                <p>lorem ipsum do set</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img className = "d-block w-100" src={barbercut} alt="barber shop image 3"/>
            <Carousel.Caption>
                <h3>Third Caption</h3>
                <p>lorem ipsum do set marcus garvey</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}
