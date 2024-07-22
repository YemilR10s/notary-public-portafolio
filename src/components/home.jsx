import '../styles/home.css';
import { Payments } from './payments';
import { Services } from './services';
import { Testimonios } from './testimonios';
import imagePortafolio from '/lidiaIMG1.jpg'
import logo1 from "/logo1.png"
import logo2 from "/logo2.png"
import logo4 from "/logo4.png"
import {motion} from "framer-motion"
import { useTranslation } from 'react-i18next';



export const Home = () => {

  const {t} = useTranslation()
  
  return (
    <>
    {/* Home Section all content  */}
    <div className="home-section" id='home' >


        {/* home hero Section, hero and img*/}
        <div className="home-hero-Section">

          <motion.h1
          whileInView={{opacity:[0,1], x:[-100,0]}}
          transition={{duration:1}}
          viewport={{once: true}}
          className='home-hero-tittle-h1' dangerouslySetInnerHTML={{ __html: t('description') }}></motion.h1>
          
            {/**************  unordered list items *****************/}
            <div className="home-hero-unordered-list">
             <ul>
                <motion.li
                whileInView={{opacity:[0,1], x:[-100,0]}}
                transition={{duration:1.1}}
                viewport={{once: true}}
                >{t("list1")}</motion.li>
                <motion.li
                whileInView={{opacity:[0,1], x:[-100,0]}}
                transition={{duration:1.2}}
                viewport={{once: true}}
                >{t("list2")}</motion.li>
                <motion.li
                whileInView={{opacity:[0,1], x:[-100,0]}}
                transition={{duration:1.3}}
                viewport={{once: true}}
                >{t("list3")}</motion.li>
             </ul>

             <ul>
                <motion.li
                whileInView={{opacity:[0,1], x:[-100,0]}}
                transition={{duration:1.4}}
                viewport={{once:true}}
                >{t("list4")}</motion.li>
                <motion.li
                whileInView={{opacity:[0,1], x:[-100,0]}}
                transition={{duration:1.5}}
                viewport={{once:true}}
                >{t("list5")}</motion.li>
                <motion.li
                whileInView={{opacity:[0,1], x:[-100,0]}}
                transition={{duration:1.6}}
                viewport={{once:true}}
                >{t("list6")}</motion.li>
            </ul>
            </div>

        </div>
                    {/* home hero img */}
        <div className="home-image">
            <motion.img 
            whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
            src={imagePortafolio} 
            alt="LidiaIMG" />
             {/* Buttons */}
            {/*  <button
              className='appointment' 
              onClick={()=>alert("available soon")}>{t("book")}
              </button> */}
        </div>
    </div>



      <div className="support-companies">
        <motion.img 
        whileInView={{opacity:[0,1]}}
        transition={{duration:1.6}}
        viewport={{once:true}}
        src={logo1} alt="logo1" />

        <motion.img 
        whileInView={{opacity:[0,1]}}
        transition={{duration:1.6}}
        viewport={{once:true}}
        src={logo2} alt="logo2" />

        <motion.img 
          whileInView={{opacity:[0,1]}}
          transition={{duration:1.6}}
          viewport={{once:true}}
        src={logo4} alt="logo4" />

      </div>
      <motion.h2 
      whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
      className='ourServicesH2Home'>{t("ourServices")}</motion.h2>
      <Services/>
      <motion.h2 
      whileInView={{opacity:[0,1]}}
            transition={{duration:1.6}}
            viewport={{once:true}}
      className='testimonyH2Home'>{t("testimony")}</motion.h2>
      <Testimonios/>
      <Payments/>
    </>
  )
}
