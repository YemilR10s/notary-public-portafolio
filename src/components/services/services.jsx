
import './services.css'
import { useTranslation } from 'react-i18next'



export const Services = () => {

  const {t} = useTranslation()

   
  return (
    <>
    <div className="services-section" id='services'>
    
        <h2
           className='servicesTitle'>{t("ourServices")}
        </h2>


    <div className="services-content">


            <div className="caja">
            <i className="fa-solid fa-receipt"></i>
            <h3>{t("notaryPublic")}</h3>
            </div>


            <div className="caja">
            <i className="fa-solid fa-certificate"></i>
            <h3>{t("CertifiedSigningAgent")}</h3>  
            </div>



            <div className="caja">
            <i className="fa-solid fa-people-carry-box"></i>
            <h3>{t("ImmigrationProcedures")}</h3> 
            </div>

            <div className="caja">
            <i className="fa-solid fa-ring"></i>
            <h3>{t("WeddingOffician")}</h3> 
            </div>

            <div className="caja">
            <i className="fa-solid fa-building"></i>
            <h3>{t("RealEstateBroker")}</h3>    
            </div>


            <div className="caja">
            <i className="fa-solid fa-check"></i>
            <h3>{t("Corporations")}</h3>
            </div>
                      
        </div>
        
    </div>
    </>
  )
}
