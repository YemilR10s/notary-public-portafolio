
import { useTranslation } from 'react-i18next';
import '../styles/gallery.css';
import gallery1 from '/gallery1.jpg';
import gallery2 from '/gallery2.jpg';
import gallery3 from '/gallery3.jpg';
import gallery4 from '/gallery4.jpg';
import gallery6 from '/gallery6.jpg';


export const Gallery = () => {
    const { t } = useTranslation();
    
  return (
    <>
    <div className="gallery-container" id='gallery'>

    <div className="images-container">
      <div className="grid-imagenes">
        <div className="gallery-introduction">
            <h3>{t("galleryH3")}</h3>
            <p>{t("galleryP")}</p>
        </div>
        <img className='img1' src={gallery1} alt="Gallery Image 1" />
        <img className='img2' src={gallery2} alt="Gallery Image 2" />
        <img className='img3' src={gallery3} alt="Gallery Image 3" />
        <img className='img4' src={gallery4} alt="Gallery Image 4" />
        <img className='img6' src={gallery6} alt="Gallery Image 6" />
      </div>
    </div>

    </div>
    </>
  );
};

