import { useState } from 'react'
import './navbar.css'
import logo from "./logo.png"
import {useTranslation} from "react-i18next"



export const Navbar = () => {

    // cambio de idioma
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

    // menu toggle
    const [showMenu, setShowMenu] = useState(false)
    function toggleMenu(){
        setShowMenu(!showMenu)
    }

   

  return (

    <>
    <div className="navbar-container">
    
    <div className="logo" >
      <img src={logo} alt="logo" />
    </div>

     <ul className={showMenu ? "items-container active": 'items-container'}>

        <li><a href="#home">{t("home")}</a></li>
        <li><a href="#services">{t("services")}</a></li>
        <li><a href="#testimonios">{t("testimonials")}</a></li>
        <li><a href="#footer">{t("contact")}</a></li>
        

    <div className="idiomas">
      <button onClick={() => changeLanguage('es')}>ES</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
    </div>
    </ul>


     <i onClick={toggleMenu} className={showMenu ? "fa-solid fa-xmark" :"fa-solid fa-bars"}></i>

    </div>
    </>
  )
}
