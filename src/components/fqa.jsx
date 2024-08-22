import { useState } from 'react';
import '../styles/fqa.css'; // Import a separate CSS file for styling
import { useTranslation } from 'react-i18next';

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const { t } = useTranslation();
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    

    return (

        <>
        <article className='faq-section'>
            <div className="faq-container">
                <div className="faq-content">
                    {/* left */}
                    <div className="left-content">
                        <h2>{t('faqSection.title')}</h2>
                        <p>{t('faqSection.description')}</p>
                    </div>
                    {/* rigth */}
                    <div className="right-content">
                        {t('faqs', {returnObjects: true}).map((faq, index) => (
                        <div key={index} className={`faq ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
                            <div className="faq-question">
                                <h3>{faq.question}</h3> {activeIndex === index ? '-':'+'}
                            </div>
                            <div className={activeIndex === index ? 'faq-answer' : 'faq-answer-hiden' }>
                                {faq.answer} 
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </article>

        </>
    );
};

