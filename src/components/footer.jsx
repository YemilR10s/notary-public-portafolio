import { useTranslation } from "react-i18next";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AnimatedElement = ({ children, className }) => (
  <motion.div
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 1.6 }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="containerFooter">
      <div className="content">
        {/* ****************** CONTACTO ****************** */}
        <article className="contacto">
          <AnimatedElement>
            <h3>{t("contacF")}</h3>
          </AnimatedElement>

          <AnimatedElement className="ubicacion">
            <i className="fa-solid fa-location-dot"></i>
            <a
              href="https://www.google.com/maps/dir//10393+SW+186th+St+%231H,+Miami,+FL+33157,+United+States"
              target="_blank"
              rel="noopener noreferrer"
            >
              10393 SW 186th St #1H, <br /> Miami, FL 33157
            </a>
          </AnimatedElement>

          <AnimatedElement className="telefono">
            <i className="fa-solid fa-phone"></i>
            +1 305-389-3415
          </AnimatedElement>

          <AnimatedElement className="email">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:Lidiasnotarypublic2@gmail.com">
              Lidiasnotarypublic2@gmail.com
            </a>
          </AnimatedElement>

          <AnimatedElement className="horarios">
            <i className="fa-regular fa-calendar-days"></i>
            {t("horario")}
          </AnimatedElement>

          <AnimatedElement className="redesSociales">
            <a
              href="https://www.instagram.com/cutlerbaynotary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
              {t("instagram")}
            </a>
          </AnimatedElement>
        </article>

        {/* ****************** ZONAS CERCANAS ****************** */}
        <article className="zonasCercnas">
          <h3>{t("nearbyAreas")}</h3>
          <ul>
            {["Palmetto", "Cutler Bay", "Hialeah", "Kendall", "Coral Gables", "Doral", "Homestead", "Kendall West"].map(
              (area) => (
                <AnimatedElement key={area}>
                  <li>{area}</li>
                </AnimatedElement>
              )
            )}
          </ul>
        </article>

        {/* ****************** OTROS LINKS ****************** */}
        <article className="otrosLinks">
          <h3>{t("Information")}</h3>
          <ul>
            <AnimatedElement>
              <li>
                <Link to="/LegalInfoPage">{t("legalInformation")}</Link>
              </li>
            </AnimatedElement>
            <AnimatedElement>
              <li>
                <a href="/" onClick={() => alert("No disponible")}>
                  {t("formsDocuments")}
                </a>
              </li>
            </AnimatedElement>
            <AnimatedElement>
              <li>
                <Link to="/PrivacyAndConfidentiality">
                  {t("PrivacyConfidentiality")}
                </Link>
              </li>
            </AnimatedElement>
            <AnimatedElement>
              <li>
                <Link to="/testimonios">{t("testimonyLink")}</Link>
              </li>
            </AnimatedElement>
          </ul>
        </article>
      </div>

      {/* ****************** DERECHOS DE AUTOR ****************** */}
      <article className="derechosAutor">
        <AnimatedElement>
          <p>
            &copy;Copyright 2024 Lidia S. || Coded by{" "}
            <a
              href="https://www.instagram.com/yemil.r10s"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yemil Rios
            </a>
            .
          </p>
        </AnimatedElement>
      </article>
    </footer>
  );
};
