import { useState } from 'react'
import './navbar.css'
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
    
    <div className="logo">Logo</div>

     <ul className={showMenu ? "items-container active": 'items-container'}>

        <li><a href="/">{t("home")}</a></li>
        <li><a href="/">{t("services")}</a></li>
        <li><a href="/">{t("testimonials")}</a></li>
        <li><a href="/">{t("contact")}</a> </li>
    </ul>

    <div className="idiomas">
      <button onClick={() => changeLanguage('es')}>Spanish</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>

     <i onClick={toggleMenu} className={showMenu ? "fa-solid fa-xmark" :"fa-solid fa-bars"}></i>

    </div>
    </>
  )
}
