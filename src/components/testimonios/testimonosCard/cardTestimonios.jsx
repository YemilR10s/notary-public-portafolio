

import "./cardTestimonios.css"


export const CardTestimonios = ({reseña, nombre, src,fecha,estrella}) => {
  return (
    <>
    
    <div className="card">

      <div className="encabezado">
        <img src={src} alt="foto" />
        <div className="nombreYfecha">
          <h3>{nombre}</h3>
          <p>{fecha}</p>
        </div>
      </div>
       <img src={estrella} alt="estrella" />

      <p>{reseña}</p>
    </div>
    </>
  )
}

