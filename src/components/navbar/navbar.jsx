import { useState } from 'react'
import './navbar.css'
import logo from "./logo.png"
import {useTranslation} from "react-i18next"
import {motion} from "framer-motion"



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
    <motion.div className="navbar-container"
    initial={{opacity:0, y:-100}}
    animate={{opacity:1, y:0}}
    transition={{duration: 1.5}}>
    
    <div className="logo" >
      <img src={logo} alt="logo" />
    </div>

     <ul className={showMenu ? "items-container active": 'items-container'}>

        <li><a href="#home">{t("home")}</a></li>
        <li><a href="#services">{t("services")}</a></li>
        <li><a href="#testimonios">{t("testimonials")}</a></li>
        <li><a href="#footer">{t("contact")}</a></li>
        

    <select className="idiomas" onChange={handleSelectChange}>
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
    </ul>


     <i onClick={toggleMenu} className={showMenu ? "fa-solid fa-xmark" :"fa-solid fa-bars"}></i>

    </motion.div>
    </>
  )
}
