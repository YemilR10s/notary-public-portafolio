
import '../styles/services.css'
import { useTranslation } from 'react-i18next'




export const Services = () => {

  const {t} = useTranslation()

   
  return (
    <>
    <div className="services-section" id='services'>
    
        <h2
           className='servicesTitle'>{t("ourServices")}
        </h2>


      <div className="services-icon">


            <div className="caja">
            <i className="fa-solid fa-receipt" style={{color:"red"}}></i>
            <h3>{t("notaryPublic")}</h3>
            <p>{t("notaryP")}</p>
            </div>


            <div className="caja">
            <i className="fa-solid fa-certificate" style={{color:"yellow"}}></i>
            <h3>{t("CertifiedSigningAgent")}</h3>  
            <p>{t("CertifiedSigningAgentP")}</p>
            </div>



            <div className="caja">
            <i className="fa-solid fa-people-carry-box" style={{color:"green"}}></i>
            <h3>TRAMITES DE INMIGRACIÓN</h3> 
            <p>{t("ImmigrationProceduresP")}</p>
            </div>

            <div className="caja">
            <i className="fa-solid fa-ring" style={{color:"blue"}}></i>
            <h3>{t("WeddingOffician")}</h3> 
            <p>{t("WeddingOfficianP")}</p>
            </div>


            <div className="caja">
            <i className="fa-solid fa-map-location-dot" style={{color:"pink"}}></i>
            <h3>{t("MOBILENOTARY")}</h3>
            <p>{t("MOBILENOTARYP")}</p>
            </div>
                      
        </div>

      <div className="services-conten">

      </div>
        
    </div>
    </>
  )
}
