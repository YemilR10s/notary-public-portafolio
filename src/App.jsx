/* components */
import { Footer } from './components/footer'
import { Home } from './components/home'
import { Navbar } from './components/navbar'
import { Gallery } from './components/gallery'
import { FAQ } from './components/fqa'


/* pages */
import { ServicesPage } from './pages/servicesPage'
import { TestimonialsPage } from './pages/testimonialsPage'
import { AboutMePage } from './pages/aboutMePage'
import { LegalInfoPage } from './pages/legalInfoPage'
import { PrivacyAndConfidentiality } from './pages/PrivacyAndConfidentiality'


/* locales translation */
import enTraslation from "./locales/en.json"
import esTraslation from "./locales/es.json" 
import esHome from "./locales/homeT/esHome.json" 
import enHome from "./locales/homeT/enHome.json" 
import enServices from "./locales/servicesT/enServices.json" 
import esServices from "./locales/servicesT/esServices.json" 
import enFooter from "./locales/footerT/enFooter.json" 
import esFooter from "./locales/footerT/esFooter.json" 
import enTestimony from "./locales/testimonios/enTestimonios.json" 
import esTestimony from "./locales/testimonios/esTestimonios.json" 
import esTestimonyCarrusel from "./locales/testimonios/esTestimoniosCarrusel.json" 
import enTestimonyCarrusel from "./locales/testimonios/enTestimoniosCarrusel.json" 
import enGallery from "./locales/gallery/enGallery.json" 
import esGallery from "./locales/gallery/esGallery.json" 
import enAboutMe from "./locales/aboutMeT/enAboutMe.json"
import esAboutMe from "./locales/aboutMeT/esAboutMe.json"
import enLegalInfo from "./locales/legalInfoT/enLegalInfo.json"
import esLegalInfo from "./locales/legalInfoT/esLegalInfo.json"
import enPrivacyAndConfidentiality from "./locales/PrivacyAndConfidentialityT/enPrivacyAndConfidentiality.json"
import esPrivacyAndConfidentiality from "./locales/PrivacyAndConfidentialityT/esPrivacyAndConfidentiality.json"


import {initReactI18next} from "react-i18next"
import i18n from 'i18next'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



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
           ...enTestimony,
           ...enTestimonyCarrusel,
           ...enGallery,
           ...enAboutMe,
           ...enLegalInfo,
           ...enPrivacyAndConfidentiality
        }
      },
      es: {translation: {
          ...esTraslation ,
          ...esHome,
          ...esServices,
          ...esFooter,
          ...esTestimony,
          ...esTestimonyCarrusel,
          ...esGallery,
          ...esAboutMe,
          ...esLegalInfo,
          ...esPrivacyAndConfidentiality

      }}
    }
    ,
    lng: "en", // lenguaje defoult
    fallbackLng: "en", // Fallback language Define el idioma de reserva que se utilizará si la traducción para el idioma actual no está disponible.
    interpolation: {
      escapeValue: false //// React already escapes by default
    },
    returnObjects: true 
  })

function App() {
 
 
  return (  
      
    <BrowserRouter>
    
      <Navbar/>

      <Routes>

        <Route path='/notary-public-portafolio/' element={<Home />}/>
        <Route path='/notary-public-portafolio/services' element={<ServicesPage/>}/>
        <Route path='/notary-public-portafolio/gallery' element={<Gallery/>}/>
        <Route path='/notary-public-portafolio/testimonios' element={<TestimonialsPage />}/>
        <Route path='/notary-public-portafolio/AboutMePage' element={<AboutMePage />}/>
        <Route path='/notary-public-portafolio/faq' element={ <FAQ/>}/>
        <Route path='/notary-public-portafolio/legalInfoPage' element={ <LegalInfoPage/>}/>
        <Route path='/notary-public-portafolio/PrivacyAndConfidentiality' element={ <PrivacyAndConfidentiality/>}/>

      </Routes>

      <Footer/>

    </BrowserRouter>
     
   
  );
}

export default App
