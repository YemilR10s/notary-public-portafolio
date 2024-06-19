import { useTranslation } from "react-i18next"
import "../styles/footer.css"
import { Link } from "react-router-dom"
export const Footer = () => {
  const {t } = useTranslation()
  return (
    
    <>
      <div id="footer" className="containerFooter">

        <div className="content">
  
  {/* ****************** CONTACTO ***************+ */}

              <div className="contacto">

                <h3>{t("contacF")}</h3>

                <p className="ubicacion">
                    <i className="fa-solid fa-location-dot"></i>
                    <a href="https://www.google.com/maps/dir//10393+SW+186th+St+%231H,+Miami,+FL+33157,+United+States/@25.5964147,-80.4422418,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d9c4587f5832cf:0x17704e976b880896!2m2!1d-80.3598403!2d25.5964378?entry=ttu" target="_blank">
                    10393 SW 186th St #1H, <br />Miami, FL 33157
                    </a>
                </p>


                <p className="telefono">
                    <i className="fa-solid fa-phone"></i>
                    +1 305-389-3415
                </p>


                <p className="email">
                    <p>
                      <i className="fa-solid fa-envelope"></i>
                      <a href="mailto:Lidiasnotarypublic2@gmail.com">Lidiasnotarypublic2@gmail.com</a>
                    </p>
                </p>


                <p className="horarios">
                <i className="fa-regular fa-calendar-days"></i>
                  {t("horario")}
                </p>

                <p className="redesSociales">
                  <a href="https://www.instagram.com/cutlerbaynotary/" target="_blank">
                     <i className="fa-brands fa-instagram"></i>
                  {t("instagram")}  
                  </a>
                </p>
               
              </div>

  
  {/* ******************ZONAS CERCANAS ***************+ */}
              <div className="zonasCercnas">
                <h3>{t("nearbyAreas")}</h3>
                <ul>
                  <li>palmetto</li>
                  <li>Cutler Bay</li>
                  <li>Hialeah</li>
                  <li>Kendall</li>
                  <li>Coral Gables</li>
                  <li>Doral</li>
                  <li>Homestead</li>
                  <li>kendall West</li>
                </ul>
              </div>
  
  {/* ******************otros links ***************+ */}
  
              <div className="otrosLinks">
                <h3>{t("Information")}</h3>


                <ul>

                  

                  <li><Link to="/notary-public-portafolio/LegalInfoPage"
                          >
                            {t("legalInformation")}</Link>
                  </li>

                  <li><a href="/"
                          onClick={()=>{alert("no disponible")}}>
                            {t("formsDocuments")}</a>
                  </li>

                  <li><a href="/"
                          onClick={()=>{alert("no disponible")}}>
                          {t("PrivacyConfidentiality")}</a>
                  </li>

                  <li><Link to="/notary-public-portafolio/testimonios">
                          {t("frequentQuestions")}</Link>
                  </li>
                </ul>
              </div>

          
  
        </div>

  {/* ******************derechos de Autor ***************+ */}
        <div className="derechosAutor">
            <p>
                &copy;Copyright 2024 Lidia S. || Coded by 
                <a href="https://www.instagram.com/yemilr10s/" 
                   target="_blank">
                  Yemil Rios
               </a>.
          </p>

        </div>



    </div>

    </>
  )
}
