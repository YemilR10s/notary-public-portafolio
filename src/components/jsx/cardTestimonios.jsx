

import "../styles/cardTestimonios.css"


export const CardTestimonios = ({review, name, src,date,star}) => {
  return (
    <>
    
    <div className="card">

      <div className="encabezado">
        <img src={src} alt="foto" />
        <div className="nombreYfecha">
          <h3>{name}</h3>
          <p>{date}</p>
        </div>
      </div>
       <img src={star} alt="estrella" />

      <p>{review}</p>
    </div>
    </>
  )
}

