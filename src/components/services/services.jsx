
import './services.css'
import {motion } from 'framer-motion'



export const Services = () => {


   
  return (
    <>
    <div className="services-section">

        <motion.h2
            initial={{opacity:0, y: 50}}
            whileInView={{opacity: 1, y:0, transition: {delay: 0.2, duration: 1.5}}}
            viewport={{ once: false, amount: .5 }}
        className='servicesTitle'>Our Services
        </motion.h2>


    <div className="services-content">


            <motion.div className="caja"
              initial={{opacity:0 , y: 50}}
              whileInView={{opacity: 1, y:0, transition: {delay: 0.4, duration: 1.5}}}
              viewport={{ once: false, amount: .5}}
            >
            <i className="fa-solid fa-receipt"></i>
            <h3>Notary public</h3>
            </motion.div>


            <motion.div 
                initial={{opacity:0, y: 50 }}
                whileInView={{opacity: 1, y:0, transition: {delay: 0.4, duration: 1.5}}}
                viewport={{ once: false, amount: .5 }}
                className="caja">
            <i className="fa-solid fa-certificate"></i>
            <h3>Certified Signing agent</h3>  
            </motion.div>



            <motion.div
                 initial={{opacity:0, y: 50 }}
                 whileInView={{opacity: 1, y:0, transition: {delay: 0.4, duration: 1.5}}}
                 viewport={{ once: false, amount: .5 }}
                className="caja">
            <i className="fa-solid fa-people-carry-box"></i>
            <h3>Trámites de inmigración</h3> 
            </motion.div>

            <motion.div
                  initial={{opacity:0, y: 50 }}
                  whileInView={{opacity: 1, y:0, transition: {delay: 0.2, duration: 1.5}}}
                  viewport={{ once: false, amount: .5 }}
                className="caja">
            <i className="fa-solid fa-ring"></i>
            <h3>Wedding officiant</h3> 
            </motion.div>

            <motion.div
                 initial={{opacity:0, y: 50 }}
                 whileInView={{opacity: 1, y:0, transition: {delay: 0.2, duration: 1.5}}}
                 viewport={{ once: false, amount: .5 }}
                className="caja">
            <i className="fa-solid fa-building"></i>
            <h3>Real estate broker</h3>    
            </motion.div>


            <motion.div 
                 initial={{opacity:0, y: 50 }}
                 whileInView={{opacity: 1, y:0, transition: {delay: 0.2, duration: 1.5}}}
                 viewport={{ once: false, amount: .5 }}
                className="caja">
            <i className="fa-solid fa-check"></i>
            <h3>Corporaciones</h3>
            </motion.div>
                      
        </div>
        
    </div>
    </>
  )
}
