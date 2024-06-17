import { useTranslation } from "react-i18next"
import { Testimonios } from "../components/testimonios"
import "../styles/testimonios.css"
import { FAQ } from "../components/fqa"


export const TestimonialsPage = () => {
    const {t} = useTranslation()

  return (

    <>
    <div className="testimonialsPage">

    <h2 className="theySay">{t("testimony")}</h2>
    </div>

    <Testimonios/>
    <FAQ/>
    </>
  )
}
