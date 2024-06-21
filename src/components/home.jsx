import '../styles/home.css';
import { Payments } from './payments';
import { Services } from './services';
import { Testimonios } from './testimonios';
import imagePortafolio from '/lidiaIMG1.jpg'
import logo1 from "/logo1.png"
import logo2 from "/logo2.png"
import logo4 from "/logo4.png"


import { useTranslation } from 'react-i18next';



export const Home = () => {

  const {t} = useTranslation()
  
  return (
    <>
    {/* Home Section all content  */}
    <div className="home-section" id='home' >


        {/* home hero Section, hero and img*/}
        <div className="home-hero-Section">

          <h1 className='home-hero-tittle-h1' dangerouslySetInnerHTML={{ __html: t('description') }}></h1>
          
            {/**************  unordered list items *****************/}
            <div className="home-hero-unordered-list">
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

        </div>
                    {/* home hero img */}
        <div className="home-imagen">
            <img src={imagePortafolio} alt="LidiaIMG" />
             {/* Buttons */}
            {/*  <button
              className='appointment' 
              onClick={()=>alert("available soon")}>{t("book")}
              </button> */}
        </div>
    </div>



      <div className="empresas-respaldo">
        <img src={logo1} alt="logo1" />
        <img src={logo2} alt="logo2" />
        <img src={logo4} alt="logo4" />
      </div>
      <h2 className='ourServicesH2Home'>{t("ourServices")}</h2>
      <Services/>
      <h2 className='testimonyH2Home'>{t("testimony")}</h2>
      <Testimonios/>
      <Payments/>
    </>
  )
}
