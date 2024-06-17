import { useTranslation } from "react-i18next"
import lidia from "../../public/lidia.jpg"
import { Testimonios } from "../components/testimonios"
import "../styles/aboutMe.css"

export const AboutMePage = () => {

    const {t} = useTranslation()
  return (
    <>
    

        <div className="aboutMeIMG">
            <h2 className="aboutMeH2">{t("aboutMeH2")}</h2>
        </div>

        <div className="aboutMeArticle">

        <div className="leftIMG">
            <img src={lidia} alt="" />
        </div>

        <div className="rightText">
            <p>{t("rightTextP")}</p>
        </div>
        </div>


        <div className="aboutMeFooter">
            <div className="notaryPublic">
            <h3>{t("notaryPublicH3")}</h3>
            <p className="date">{t("notaryPublicDate")}</p>
            <p className="text">{t("notaryPublicText")}</p>
             
            </div>
            <div className="realEstate">
            <h3>{t("realEstateH3")}</h3>
            <p className="date">{t("realEstateDate")}</p>
            <p className="text">{t("realEstateText")}</p>
              
            </div>
            <div className="paralegal">
            <h3>{t("paralegalH3")}</h3>
            <p className="date">{t("paralegalDate")}</p>
            <p className="text">{t("paralegalText")}</p>
            </div>

        </div>

        <Testimonios/>

    </>
  )
}
