
import { CardTestimonios } from "./testimonosCard/cardTestimonios"
import "./testimonios.css"
import Slider from "react-slick";
import { useTranslation } from "react-i18next";






export const Testimonios = () => {

  const {t} = useTranslation()
  const Testimonials = t("Testimonials")

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
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


      <div className="testimonios">
          <h2>{t("testimony")}</h2>
          <div className="google"></div>
          <div className="p-e-container">
            <div className="estrellas"></div>
            <div className="puntuacion"> = 5,0</div>
          </div>
          <div className="t-a-container">
            <div className="totalidad">{t("review")}</div>
            <a href="https://www.google.com/localservices/prolist?spp=CgwvZy8xcHAydmJuNWQ%3D&scp=CgAaG05PVEFSWSBQVUJMSUMgSU4gQ1VUTEVSIEJBWSobTk9UQVJZIFBVQkxJQyBJTiBDVVRMRVIgQkFZ&q=NOTARY+PUBLIC+IN+CUTLER+BAY&src=2&slp=UhQIARIQEg4iDC9nLzFwcDJ2Ym41ZA#ts=3" target="_blank">{t("reviewA")}</a>
          </div>
      </div>


     

      <Slider {...settings}>
      {Testimonials.map((item, index) =>(

        <CardTestimonios
        key={index}
        review={item.review}
        name={item.name}
        src={item.src}
        date={item.date}
        star={item.star}
        />
      ))}
      </Slider>
    </div>
    
    </>
  )
}

