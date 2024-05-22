import './home.css';
import imagenPortafolio from './b4.jpg';
/* import {useTypewriter, Cursor} from 'react-simple-typewriter' */
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next';



export const Home = () => {

  const {t} = useTranslation()
  
  /* const [texto] = useTypewriter({
    words:[ t("notary"), t("experience")],
    loop: [],
  }) */
  return (
    <>
    <motion.div className="home-section" id='home' >
        <motion.div className="home-description"

            initial={{opacity:0, x:-100}}
            animate={{opacity:1 , x:0}}
            transition={{duration: 1.5}}>

            {/* <h1>{texto}<Cursor/></h1>
            <p>{t('description')}</p> */}

            <h1 dangerouslySetInnerHTML={{ __html: t('description') }}></h1>


{/**************  Lista desordenada *****************/}
            <div className="listaDesordena">

            <ul>
              <li>{t("list1")}</li>
              <li>{t("list2")}</li>
              <li>{t("list3")}</li>
            </ul>

            <ul>
              <li>{t("list4")}</li>
              <li>{t("list5")}</li>
              <li>{t("list6")}</li>
            </ul>


            </div>


        </motion.div>

        <motion.div className="home-imagen"
        initial={{opacity: 0, x:80}}
        animate={{opacity: 1, x:0}}
        transition={{duration:1.5}}>
        <img src={imagenPortafolio} alt="LidiaIMG" />
        <button>{t("book")}</button>
        </motion.div>
    </motion.div>
    </>
  )
}
