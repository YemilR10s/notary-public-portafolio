import './home.css';
import imagenPortafolio from './bg.jpg';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next';



export const Home = () => {

  const {t} = useTranslation()
  
  const [texto] = useTypewriter({
    words:[ t("notary"), t("experience")],
    loop: [],
  })
  return (
    <>
    <motion.div className="home-section"
      variants={{
        hiddent: {opacity: 0, y: -100},
        visible: {opacity: 1, y: 0}
      }}
      initial="hiddent"
      animate="visible"
      transition={{duration: 1.5}}
    >
        <div className="home-description">
            <h1>{texto}<Cursor/></h1>
            <p>{t('description')}</p>
            <div className="iconos">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            </div>
        </div>
        <div className="home-imagen">
        <img src={imagenPortafolio} alt="LidiaIMG" />
        </div>
    </motion.div>
    </>
  )
}
