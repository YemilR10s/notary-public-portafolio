import '../styles/services.css'
import { Services } from "../components/services"
import { Payments } from '../components/payments'
import { useTranslation } from 'react-i18next'
import { Testimonios } from '../components/testimonios'


export const ServicesPage = () => {
  const {t} = useTranslation()
  return (
    <>
    <div className="services-Img-Title">
    <h2 className='servicesH2'>{t("ourServices")}</h2>
    </div>
    <Services/>
    <Testimonios/>
    <Payments/>
    </>
  )
}

