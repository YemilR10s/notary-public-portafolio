import './home.css';
import imagenPortafolio from './tiaHome.png';

export const Home = () => {
  return (
    <>
    <div className="home-section">
        <div className="home-description">
            <h1>NOTARY PUBLIC IN CUTLER BAY</h1>
            <p>As a dedicated and experienced Notary Public in Cutler Bay, I prioritize accuracy, professionalism, and attention to detail in all notarial acts. With comprehensive training and certifications, I specialize in loan signings and real estate transactions. My services cover a variety of documents including affidavits, power of attorney, deeds, and wills, all executed with strict adherence to legal requirements and ethical standards. Additionally, I provide the convenience of mobile notary services, offering flexibility by traveling to clients locations at their preferred times.</p>
            <div className="iconos">
            <button >download my cv</button>
            {/* <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i> */}
            </div>
        </div>
        <div className="home-imagen">
        <img src={imagenPortafolio} alt="LidiaIMG" />
        </div>
    </div>
    </>
  )
}
