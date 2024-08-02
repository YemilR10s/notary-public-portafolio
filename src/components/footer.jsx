import { useTranslation } from "react-i18next"
import "../styles/footer.css"
import { Link } from "react-router-dom"
import {motion} from "framer-motion"
export const Footer = () => {
  const {t } = useTranslation()
  return (
    
    <>
      <div id="footer" className="containerFooter">

        <div className="content">
  
  {/* ****************** CONTACTO ***************+ */}

              <div className="contacto">

                <motion.h3
                whileInView={{opacity:[0,1]}}
                transition={{duration:1.6}}
                viewport={{once:true}}
                >{t("contacF")}</motion.h3>

                <motion.p 
                whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
                className="ubicacion">
                    <i className="fa-solid fa-location-dot"></i>
                    <a href="https://www.google.com/maps/dir//10393+SW+186th+St+%231H,+Miami,+FL+33157,+United+States/@25.5964147,-80.4422418,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d9c4587f5832cf:0x17704e976b880896!2m2!1d-80.3598403!2d25.5964378?entry=ttu" target="_blank">
                    10393 SW 186th St #1H, <br />Miami, FL 33157
                    </a>
                </motion.p>




                <motion.p 
                whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
                className="telefono">
                    <i className="fa-solid fa-phone"></i>
                    +1 305-389-3415
                </motion.p>




                <motion.p 
                whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
                className="email">
                    <motion.p>


                      <i className="fa-solid fa-envelope"></i>
                      <a href="mailto:Lidiasnotarypublic2@gmail.com">Lidiasnotarypublic2@gmail.com</a>
                    </motion.p>


                </motion.p>




                <motion.p 
                whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
                className="horarios">
                <i className="fa-regular fa-calendar-days"></i>
                  {t("horario")}
                </motion.p>



                <motion.p 
                whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
                className="redesSociales">
                  <a href="https://www.instagram.com/cutlerbaynotary/" target="_blank">
                     <i className="fa-brands fa-instagram"></i>
                  {t("instagram")}  
                  </a>
                </motion.p>


               
              </div>

  
  {/* ******************ZONAS CERCANAS ***************+ */}
              <div className="zonasCercnas">
                <h3>{t("nearbyAreas")}</h3>
                <ul>
                  <motion.li
                  whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
                  >palmetto</motion.li>
                  <motion.li
                  whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
                  >Cutler Bay</motion.li>
                  <motion.li
                  whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
                  >Hialeah</motion.li>
                  <motion.li
                  whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
                  >Kendall</motion.li>
                  <motion.li
                  whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
                  >Coral Gables</motion.li>
                  <motion.li
                  whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
                  >Doral</motion.li>
                  <motion.li
                  whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
                  >Homestead</motion.li>
                  <motion.li
                  whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
                  >kendall West</motion.li>
                </ul>
              </div>
  
  {/* ******************otros links ***************+ */}
  
              <div className="otrosLinks">
                <h3>{t("Information")}</h3>


                <ul>

                  

                  <motion.li
                  whileInView={{opacity:[0,1]}}
                  transition={{duration:1.6}}
                  viewport={{once:true}}
                  ><Link to="/LegalInfoPage">
                  {t("legalInformation")}
                  </Link>
                  </motion.li>


                  <motion.li
                    whileInView={{opacity:[0,1]}}
                    transition={{duration:1.6}}
                    viewport={{once:true}}>
                    <a href="/"
                    onClick={()=>{alert("no disponible")}}>
                    {t("formsDocuments")}</a>
                  </motion.li>

                  <motion.li
                  whileInView={{opacity:[0,1]}}
                  transition={{duration:1.6}}
                  viewport={{once:true}}
                  ><Link to='/PrivacyAndConfidentiality'>
                    {t("PrivacyConfidentiality")}</Link>
                  </motion.li>

                  <motion.li
                  whileInView={{opacity:[0,1]}}
                  transition={{duration:1.6}}
                  viewport={{once:true}}
                  ><Link to="/testimonios">
                   {t("testimonyLink")}</Link>
                  </motion.li>
                </ul>
              </div>

          
  
        </div>

  {/* ******************derechos de Autor ***************+ */}
        <div className="derechosAutor">
            <motion.p
            whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
            > &copy;Copyright 2024 Lidia S. || Coded by 
                <a href="https://www.instagram.com/dev.r10s?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                   target="_blank">
                  Yemil Rios
               </a>.
          </motion.p>
        </div>

    </div>

    </>
  )
}
