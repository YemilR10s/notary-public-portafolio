import { useState } from 'react'
import '../styles/navbar.css'
import logo from "/logo.png"
import {useTranslation} from "react-i18next"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'



export const Navbar = () => {

    // cambio de idioma
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };


    const handleSelectChange = (event) => {
      changeLanguage(event.target.value);
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

        <li><Link to="/">{t("home")}</Link></li>
        <li><Link to="/services">{t("services")}</Link></li>
        <li><Link to="/testimonios">{t("testimonials")}</Link></li>
        <li><Link to="/gallery">{t("gallery")}</Link></li>
        
        

    <select className="idiomas" onChange={handleSelectChange}>
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
    </ul>


     <i onClick={toggleMenu} className={showMenu ? "fa-solid fa-xmark" :"fa-solid fa-bars"}></i>

    </div>
    </>
  )
}
