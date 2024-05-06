
import './services.css'
import {motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'



export const Services = () => {

  const {t} = useTranslation()

   
  return (
    <>
    <div className="services-section" id='services'>
    
        <motion.h2
            initial={{opacity:0, y: 50}}
            whileInView={{opacity: 1, y:0, transition: {delay: 0.2, duration: 0.5}}}
            viewport={{ once: false, amount: .5 }}
        className='servicesTitle'>{t("ourServices")}
        </motion.h2>


    <div className="services-content">


            <motion.div className="caja"
              initial={{opacity:0 , y: 50}}
              whileInView={{opacity: 1, y:0, transition: {delay: 0.4, duration: 0.5}}}
              viewport={{ once: false, amount: .5}}
            >
            <i className="fa-solid fa-receipt"></i>
            <h3>{t("notaryPublic")}</h3>
            </motion.div>


            <motion.div 
                initial={{opacity:0, y: 50 }}
                whileInView={{opacity: 1, y:0, transition: {delay: 0.4, duration: 0.5}}}
                viewport={{ once: false, amount: .5 }}
                className="caja">
            <i className="fa-solid fa-certificate"></i>
            <h3>{t("CertifiedSigningAgent")}</h3>  
            </motion.div>



            <motion.div
                 initial={{opacity:0, y: 50 }}
                 whileInView={{opacity: 1, y:0, transition: {delay: 0.4, duration: 0.5}}}
                 viewport={{ once: false, amount: .5 }}
                className="caja">
            <i className="fa-solid fa-people-carry-box"></i>
            <h3>{t("ImmigrationProcedures")}</h3> 
            </motion.div>

            <motion.div
                  initial={{opacity:0, y: 50 }}
                  whileInView={{opacity: 1, y:0, transition: {delay: 0.2, duration: 0.5}}}
                  viewport={{ once: false, amount: .5 }}
                className="caja">
            <i className="fa-solid fa-ring"></i>
            <h3>{t("WeddingOffician")}</h3> 
            </motion.div>

            <motion.div
                 initial={{opacity:0, y: 50 }}
                 whileInView={{opacity: 1, y:0, transition: {delay: 0.2, duration: 0.5}}}
                 viewport={{ once: false, amount: .5 }}
                className="caja">
            <i className="fa-solid fa-building"></i>
            <h3>{t("RealEstateBroker")}</h3>    
            </motion.div>


            <motion.div 
                 initial={{opacity:0, y: 50 }}
                 whileInView={{opacity: 1, y:0, transition: {delay: 0.2, duration: 0.5}}}
                 viewport={{ once: false, amount: .5 }}
                className="caja">
            <i className="fa-solid fa-check"></i>
            <h3>{t("Corporations")}</h3>
            </motion.div>
                      
        </div>
        
    </div>
    </>
  )
}
