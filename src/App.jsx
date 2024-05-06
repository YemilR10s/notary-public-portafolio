import { Footer } from './components/footer/footer'
import { Home } from './components/home/home'
import { Navbar } from './components/navbar/navbar'
import { Services } from './components/services/services'
import { Testimonios } from './components/testimonios/testimonios' 

 import enTraslation from "./components/locales/en.json"
import esTraslation from "./components/locales/es.json" 
import esHome from "./components/locales/homeT/esHome.json" 
import enHome from "./components/locales/homeT/enHome.json" 
import enServices from "./components/locales/servicesT/enServices.json" 
import esServices from "./components/locales/servicesT/esServices.json" 
import enFooter from "./components/locales/footerT/enFooter.json" 
import esFooter from "./components/locales/footerT/esFooter.json" 

import {initReactI18next} from "react-i18next"
import i18n from 'i18next'


// initialize i18next

i18n
    .use(initReactI18next) //Este plugin es necesario para integrar i18next con aplicaciones React.
    .init({
      resources:{
      en: {
        translation: {
           ...enTraslation,
           ...enHome,
           ...enServices,
           ...enFooter,
        }
      },
      es: {translation: {
          ...esTraslation ,
          ...esHome,
          ...esServices,
          ...esFooter,

      }}
    }
    ,
    lng: "en", // lenguaje defoult
    fallbackLng: "en", // Fallback language Define el idioma de reserva que se utilizará si la traducción para el idioma actual no está disponible.
    interpolation: {
      escapeValue: false //// React already escapes by default
    }
  })

function App() {
 
 
  return (  
      <>
        <Navbar/>
        <Home />
        <Services />
        <Testimonios />
        <Footer /> 
      </>
   
  );
}

export default App
