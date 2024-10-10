import '../styles/home.css';
import { Payments } from '../components/payments';
import { Services } from '../components/services';
import { Testimonios } from '../components/testimonios';
import imagePortafolio from '/lidiaIMG1.jpg'
import logo1 from "/logo1.png"
import logo2 from "/logo2.png"
import logo4 from "/logo4.png"
import {motion} from "framer-motion"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';



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
             {/* Button */}
             <div className="butonsHome">
              <a href="https://wa.me/message/RMCZBQXQBPIOJ1" target='_blank'>
             <motion.button
              whileInView={{opacity:[0,1], x:[-100,0]}}
              transition={{duration:1.7}}
              viewport={{once:true}}
              className='appointment' 
              >{t("book")}
              <i className="fa-brands fa-whatsapp"></i>
              </motion.button>
              </a>

              <Link to="/services">
              <motion.button
              whileInView={{opacity:[0,1], x:[-100,0]}}
              transition={{duration:1.7}}
              viewport={{once:true}}
              className='servicesButton' 
              >{t("servicesButton")}
              <i className="fa-solid fa-arrow-right"></i>
              </motion.button>
              </Link>
             </div>
            </div>

        </div>
                    {/* home hero img */}
        <div className="home-image">
            <motion.img 
            whileInView={{opacity:[0,1]}}
            transition={{duration:2}}
            viewport={{once:true}}
            src={imagePortafolio} 
            alt="LidiaIMG" />

            <motion.div 
            whileInView={{opacity:[0,1]}}
            transition={{duration:2}}
            viewport={{once:true}}
            className="socialNetworks">
              <a href="https://www.instagram.com/cutlerbaynotary/" target='_blank'>
              <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="mailto:Lidiasnotarypublic2@gmail.com">
              <i className="fa-solid fa-envelope"></i>
              </a>

              <a href="https://www.google.com/maps/dir//10393+SW+186th+St+%231H,+Miami,+FL+33157,+United+States/@25.5964147,-80.4422418,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d9c4587f5832cf:0x17704e976b880896!2m2!1d-80.3598403!2d25.5964378?entry=ttu" target="_blank">
                <i className="fa-solid fa-location-dot"></i>
              </a>

              <a href="https://wa.me/message/RMCZBQXQBPIOJ1" target='_blank'>
              <i className="fa-brands fa-whatsapp"></i>
              </a>
            </motion.div>
            
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
