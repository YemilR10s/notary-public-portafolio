
import '../styles/services.css'
import { useTranslation } from 'react-i18next'
import {motion} from "framer-motion"
import servicesDraw from "/servicesDraw.png"




export const Services = () => {

  const {t} = useTranslation()

   
  return (
    <>
    <div className="services-section" id='services'>
    


      <div className="services-content">

            <motion.div 
                whileInView={{opacity:[0,1]}}
                transition={{duration:1.6}}
                viewport={{once:true}}
                className="services">
                <h2 className='ourServicesH2Home'>{t("ourServices")}</h2>  
                <img src={servicesDraw} alt="" style={{width: 200}}/>
            </motion.div>

            <motion.div 
            whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
            className="caja">
            <i className="fa-solid fa-receipt" style={{color:"red"}}></i>
            <h3>{t("notaryPublic")}</h3>
            <p>{t("notaryP")}</p>
            </motion.div>


            <motion.div 
            whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
            className="caja">
            <i className="fa-solid fa-certificate" style={{color:"yellow"}}></i>
            <h3>{t("CertifiedSigningAgent")}</h3>  
            <p>{t("CertifiedSigningAgentP")}</p>
            </motion.div>



            <motion.div 
            whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
            className="caja">
            <i className="fa-solid fa-people-carry-box" style={{color:"green"}}></i>
            <h3>TRAMITES DE INMIGRACIÓN</h3> 
            <p>{t("ImmigrationProceduresP")}</p>
            </motion.div>

            <motion.div 
            whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
            className="caja">
            <i className="fa-solid fa-ring" style={{color:"blue"}}></i>
            <h3>{t("WeddingOffician")}</h3> 
            <p>{t("WeddingOfficianP")}</p>
            </motion.div>


            <motion.div 
            whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
            className="caja">
            <i className="fa-solid fa-map-location-dot" style={{color:"pink"}}></i>
            <h3>{t("MOBILENOTARY")}</h3>
            <p>{t("MOBILENOTARYP")}</p>
            </motion.div>
                      
        </div>

      
        
    </div>
    </>
  )
}
