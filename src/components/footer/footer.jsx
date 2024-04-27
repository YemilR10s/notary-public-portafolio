import { useTranslation } from "react-i18next"
import "./footer.css"
export const Footer = () => {
  const {t } = useTranslation()
  return (
    
    <>
      <div className="containerFooter">

        <div className="content">
  

              <div className="contacto">
                <h3>{t("Contac")}</h3>
                <p className="ubicacion">
                <i className="fa-solid fa-location-dot"></i>
                10393 SW 186th St #1H, <br />Miami, FL 33157
                </p>
                <p className="telefono">
                <i className="fa-solid fa-phone"></i>
                  +1 305-389-3415
                </p>
                <p className="email">
                <i className="fa-solid fa-envelope"></i>
                Lidiasnotarypublic2@gmail.com
                </p>
                <p className="horarios">
                <i className="fa-regular fa-calendar-days"></i>
                  {t("horario")}
                </p>
              </div>
  
  
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
  
  
              <div className="otrosLinks">
                <h3>{t("Information")}</h3>


                <ul>

                  <li><a href="/" 
                          onClick={()=>{alert("no disponible")}}>
                          {t("aboutNotary")}</a>
                  </li>

                  <li><a href="/"
                          onClick={()=>{alert("no disponible")}}>
                            {t("legalInformation")}</a>
                  </li>

                  <li><a href="/"
                          onClick={()=>{alert("no disponible")}}>
                          Tarifas</a>
                  </li>

                  <li><a href="/"
                          onClick={()=>{alert("no disponible")}}>
                            {t("formsDocuments")}</a>
                  </li>

                  <li><a href="/"
                          onClick={()=>{alert("no disponible")}}>
                          {t("PrivacyConfidentiality")}</a>
                  </li>

                  <li><a href="/" 
                          onClick={()=>{alert("no disponible")}}>
                          {t("frequentQuestions")}</a>
                  </li>

                </ul>
              </div>

           {/*  <div className="redesSociales">
              <h3>Redes Sociales</h3>
              <div className="iconos">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
              </div>
            </div> */}
  
        </div>
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
