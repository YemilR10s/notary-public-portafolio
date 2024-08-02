import '../styles/services.css'
import { Services } from "../components/services"
import { Payments } from '../components/payments'
import { useTranslation } from 'react-i18next'
import { Testimonios } from '../components/testimonios'
import {motion} from "framer-motion"


export const ServicesPage = () => {
  const {t} = useTranslation()
  return (
    <>
    <div className="services-Img-Title">
    <motion.h2 
    whileInView={{opacity:[0,1], x:[-100,0]}}
    transition={{duration:1.5}}
    viewport={{once:true}}
    className='servicesH2'>{t("ourServices")}</motion.h2>
    </div>
    <Services/>
    <Testimonios/>
    <Payments/>
    </>
  )
}

