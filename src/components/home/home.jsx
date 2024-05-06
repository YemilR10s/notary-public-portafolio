import './home.css';
import imagenPortafolio from './bg2.jpg';
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
    <motion.div className="home-section" id='home'
    /*   variants={{
        hiddent: {opacity: 0, x: -100},
        visible: {opacity: 1, x: 0}
      }}
      initial="hiddent"
      animate="visible"
      transition={{duration: 1.5}} */
    >
        <motion.div className="home-description"

            initial={{opacity:0, x:-100}}
            animate={{opacity:1 , x:0}}
            transition={{duration: 1.5}}>

            <h1>{texto}<Cursor/></h1>
            <p>{t('description')}</p>
            <div className="iconos">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            </div>

        </motion.div>

        <motion.div className="home-imagen"
        initial={{opacity: 0, x:80}}
        animate={{opacity: 1, x:0}}
        transition={{duration:1.5}}>
        <img src={imagenPortafolio} alt="LidiaIMG" />
        </motion.div>
    </motion.div>
    </>
  )
}
