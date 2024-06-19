import { useTranslation } from "react-i18next";
import "../styles/PrivacyAndConfidentiality.css"


export const PrivacyAndConfidentiality = () => {
    const { t } = useTranslation();
  return (
    <>
    <div className="privacyContainerIMG">
        <h2 className="PrivacyAndConfidentialityH2">{t("privacy.PrivacyAndConfidentialityH2")}</h2>
    </div>
    <div className="textContainerPrivacy">

        <h1>{t('privacy.introductionTitle')}</h1>
      <p>{t('privacy.introductionText')}</p>

      <h2>{t('privacy.informationWeCollectTitle')}</h2>
      <h3>{t('privacy.personalInformationTitle')}</h3>
      <p>{t('privacy.personalInformationText')}</p>
      <h3>{t('privacy.usageInformationTitle')}</h3>
      <p>{t('privacy.usageInformationText')}</p>

      <h2>{t('privacy.howWeUseTitle')}</h2>
      <h3>{t('privacy.providingServicesTitle')}</h3>
      <p>{t('privacy.providingServicesText')}</p>
      <h3>{t('privacy.communicationTitle')}</h3>
      <p>{t('privacy.communicationText')}</p>
      <h3>{t('privacy.personalizationTitle')}</h3>
      <p>{t('privacy.personalizationText')}</p>
      <h3>{t('privacy.analyticsTitle')}</h3>
      <p>{t('privacy.analyticsText')}</p>
      <h3>{t('privacy.legalComplianceTitle')}</h3>
      <p>{t('privacy.legalComplianceText')}</p>

      <h2>{t('privacy.informationSharingTitle')}</h2>
      <h3>{t('privacy.serviceProvidersTitle')}</h3>
      <p>{t('privacy.serviceProvidersText')}</p>
      <h3>{t('privacy.legalRequirementsTitle')}</h3>
      <p>{t('privacy.legalRequirementsText')}</p>
      <h3>{t('privacy.protectionOfRightsTitle')}</h3>
      <p>{t('privacy.protectionOfRightsText')}</p>

      <h2>{t('privacy.dataSecurityTitle')}</h2>
      <p>{t('privacy.dataSecurityText')}</p>

      <h2>{t('privacy.yourRightsTitle')}</h2>
      <p>{t('privacy.yourRightsText')}</p>

      <h2>{t('privacy.thirdPartyLinksTitle')}</h2>
      <p>{t('privacy.thirdPartyLinksText')}</p>

      <h2>{t('privacy.cookiesTitle')}</h2>
      <p>{t('privacy.cookiesText')}</p>

      <h2>{t('privacy.changesToPrivacyTitle')}</h2>
      <p>{t('privacy.changesToPrivacyText')}</p>

      <h2>{t('privacy.contactUsTitle')}</h2>
      <p>{t('privacy.contactUsText')}</p>

        </div>
    
    </>
  )
}
