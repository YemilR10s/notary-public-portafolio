import { Footer } from './components/jsx/footer'
import { Home } from './components/jsx/home'
import { Navbar } from './components/jsx/navbar'
import { Gallery } from './components/jsx/gallery'
import { Services } from './components/jsx/services'
import { Testimonios } from './components/jsx/testimonios' 

 import enTraslation from "./components/locales/en.json"
import esTraslation from "./components/locales/es.json" 
import esHome from "./components/locales/homeT/esHome.json" 
import enHome from "./components/locales/homeT/enHome.json" 
import enServices from "./components/locales/servicesT/enServices.json" 
import esServices from "./components/locales/servicesT/esServices.json" 
import enFooter from "./components/locales/footerT/enFooter.json" 
import esFooter from "./components/locales/footerT/esFooter.json" 
import enTestimony from "./components/locales/testimonios/enTestimonios.json" 
import esTestimony from "./components/locales/testimonios/esTestimonios.json" 
import esTestimonyCarrusel from "./components/locales/testimonios/esTestimoniosCarrusel.json" 
import enTestimonyCarrusel from "./components/locales/testimonios/enTestimoniosCarrusel.json" 
import enGallery from "./components/locales/gallery/enGallery.json" 
import esGallery from "./components/locales/gallery/esGallery.json" 

import {initReactI18next} from "react-i18next"
import i18n from 'i18next'
import { FAQ } from './components/jsx/fqa'
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
           ...enGallery
        }
      },
      es: {translation: {
          ...esTraslation ,
          ...esHome,
          ...esServices,
          ...esFooter,
          ...esTestimony,
          ...esTestimonyCarrusel,
          ...esGallery
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
        <Route path='/notary-public-portafolio/services' element={<Services/>}/>
        <Route path='/notary-public-portafolio/gallery' element={<Gallery/>}/>
        <Route path='/notary-public-portafolio/testimonios' element={<Testimonios />}/>
        <Route path='/notary-public-portafolio/faq' element={ <FAQ/>}/>

      </Routes>

      <Footer/>

    </BrowserRouter>
     
   
  );
}

export default App
