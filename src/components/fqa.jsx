import { useState } from 'react';
import '../styles/fqa.css'; // Import a separate CSS file for styling
import { Faqs } from '../utils/faqsData';

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    

    return (

        <>
        <article className='faq-section'>
            <div className="faq-container">
                <div className="faq-container">
                    {/* left */}
                    <div className="left-content">

                        <h2>Any Questions?</h2>
                        <p>To provide you with the information you need, we have compiled the most frequently asked questions and their answers in this section. If you have any questions that you cannot find here, please do not hesitate to contact us directly. We are here to help resolve any concerns and provide you with the best possible assistance.</p>
                    </div>
                    {/* rigth */}
                {Faqs.map((faq, index) => (
                <div key={index} className={`faq ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>

                    <div className="faq-question">
                        {faq.question}
                    </div>
                    <div className="faq-answer" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                        {faq.answer}
                    </div>
                </div>
            ))}
        </div>
            </div>
        </article>

        </>
    );
};

