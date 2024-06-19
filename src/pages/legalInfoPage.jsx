import { useTranslation } from "react-i18next";
import "../styles/legalInfo.css"
import { FAQ } from "../components/fqa";


export const LegalInfoPage = () => {
  const { t } = useTranslation();
  return (
    <>
    <div className="imgContainer">
      <h2 className= "legalInformationH2">{t('legalInformationH2')}</h2>
    </div>
    <div className="legalInfoContainer">
    <h2>{t('notarizations.typesTitle')}</h2>
      <h3>{t('notarizations.acknowledgmentTitle')}</h3>
      <p>{t('notarizations.acknowledgment')}</p>
      <h3>{t('notarizations.juratTitle')}</h3>
      <p>{t('notarizations.jurat')}</p>
      <h3>{t('notarizations.oathTitle')}</h3>
      <p>{t('notarizations.oath')}</p>
      <h3>{t('notarizations.copyTitle')}</h3>
      <p>{t('notarizations.copy')}</p>

      <h2>{t('additionalInfo.title')}</h2>
      <p>{t('additionalInfo.signatureWitnessing')}</p>
      <p>{t('additionalInfo.electronicNotarization')}</p>
      <p>{t('additionalInfo.apostilleServices')}</p>
      <p>{t('additionalInfo.mobileNotaryServices')}</p>

      <h2>{t('preparation.title')}</h2>
      <p>{t('preparation.validID')}</p>
      <p>{t('preparation.completeDocuments')}</p>
      <p>{t('preparation.notarizationType')}</p>
      <p>{t('preparation.witnesses')}</p>
    </div>
    <FAQ/>
    </>
  )
}
