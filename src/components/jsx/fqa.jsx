import { useState } from 'react';
import '../styles/fqa.css'; // Import a separate CSS file for styling

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What documents require notarization?",
            answer: "Notarization is typically required for legal documents such as wills, deeds, powers of attorney, affidavits, and contracts. However, requirements can vary by jurisdiction, so it's best to consult with a notary or legal professional."
        },
        {
            question: "What identification is acceptable for notarization?",
            answer: "Acceptable forms of identification usually include government-issued photo IDs such as driver's licenses, passports, or state ID cards. The ID must be current, unexpired, and contain a photograph and signature."
        },
        {
            question: "How much does notarization cost?",
            answer: "Notary fees vary by jurisdiction and the type of document being notarized. In many cases, there's a set fee per notarized signature, but additional charges may apply for mobile services or after-hours appointments. It's best to inquire about fees upfront."
        },
        {
            question: "Can you notarize documents written in a language other than English?",
            answer: "Yes, a notary can typically notarize documents written in languages other than English, as long as they can communicate effectively with the signer and understand the content of the document. However, it's advisable to check local regulations regarding bilingual notarization."
        },
        {
            question: "What is the process for getting a document notarized?",
            answer: "The process generally involves the signer appearing before the notary, presenting valid identification, and signing the document in the notary's presence. The notary then verifies the signer's identity, confirms their willingness to sign, and applies their official seal or stamp to the document."
        }
    ];

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
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
    );
};

