
import { useTranslation } from 'react-i18next';
import '../styles/gallery.css';
import gallery1 from '/gallery1.jpg';
import gallery2 from '/gallery2.jpg';
import gallery3 from '/gallery3.jpg';
import gallery4 from '/gallery4.jpg';
import gallery5  from '/gallery5.jpg';
import gallery6 from '/gallery6.jpg';
import gallery7 from '/gallery7.jpg';
import gallery8 from '/gallery8.jpg';
import { Testimonios } from './testimonios';
import { FAQ } from './fqa';


export const Gallery = () => {
    const { t } = useTranslation();
    
  return (
    <>
    <section className="gallery-section" id='gallery'>

    <div className="gallery-container">
      <div className="gallery-content">

        
        <div className="gallery-introduction">
            <h3>{t("galleryH3")}</h3>
            <p>{t("galleryP")}</p>
        </div>

        <img className='img1 imagenesGallery' 
          src={gallery1} alt="Gallery Image 1" />

        <img className='img2 imagenesGallery' 
            src={gallery2} alt="Gallery Image 2" />
        
        <img className='img3 imagenesGallery' 
          src={gallery3} alt="Gallery Image 3" />

        <img className='img4 imagenesGallery' 
          src={gallery4} alt="Gallery Image 4" />

        <img className='img5 imagenesGallery' 
          src={gallery5} alt="Gallery Image 5" />
       
        <img className='img6 imagenesGallery' 
          src={gallery6} alt="Gallery Image 6" />

        <img className='img7 imagenesGallery' 
          src={gallery7} alt="Gallery Image 7" />

        <img className='img8 imagenesGallery' 
          src={gallery8} alt="Gallery Image 8" />
        
      </div>
    </div>

    </section>
    <Testimonios/>
    <FAQ/>
    </>
    
  );
};

