import { DataTestimonios } from "./dataTestimonios"
import { CardTestimonios } from "./testimonosCard/cardTestimonios"
import "./testimonios.css"
import Slider from "react-slick";




export const Testimonios = () => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 445,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    
    ]
  };

  return (

    <>
    <div className="testimoniosContainer" id="testimonios">
      <h2>Testimonios</h2>
      <div className="testimonios">

      <Slider {...settings}>
      {DataTestimonios.map((item, index) =>(
        <CardTestimonios
        key={index}
        reseña={item.reseña}
        nombre={item.nombre}
        />
      ))}
      </Slider>

      </div>
    </div>
    
    </>
  )
}

