/* eslint-disable react/prop-types */

import "./cardTestimonios.css"


export const CardTestimonios = ({reseña, nombre}) => {
  return (
    <>
    
    <div className="card">
      <p>{reseña}</p>
      <h3>{nombre}</h3>
    </div>
    </>
  )
}

