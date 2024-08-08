

import "../styles/cardTestimonios.css"
import {motion} from "framer-motion"


export const CardTestimonios = ({review, name, src,date,star}) => {
  return (
    <>
    
    <motion.div 
    whileInView={{opacity:[0,1]}}
    transition={{duration:1.6}}
    viewport={{once:true}}
    className="card">

      <div className="encabezado">
        <img src={src} alt="foto" />
        <div className="nombreYfecha">
          <h3>{name}</h3>
          <p>{date}</p>
        </div>
      </div>
       <img src={star} alt="estrella" />
       <p>{review}</p>
    </motion.div>
    </>
  )
}

