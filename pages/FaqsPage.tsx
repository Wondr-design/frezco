
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';

interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-300 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left text-xl font-semibold">
                <span>{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            {isOpen && (
                <div className="mt-4 text-gray-700">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}


const FaqsPage = () => {
    const faqs = [
        { question: "How does Frizzante differ from Prosecco?", answer: "Frizzante is a sparkling alternative; our product is produced in Italy with a focus on quality and consistency for on-tap service." },
        { question: "Do I need special equipment?", answer: "No, our kegs are compatible with standard S-Coupler/Sankey and Micro Matic systems, which are common in the industry." },
        { question: "Can I make my own Spritz variations?", answer: "Absolutely! Our Frizzante serves as the perfect, neutral base for your own creative Aperitivo recipes." },
        { question: "Do you also supply mobile tapping systems?", answer: "Yes, upon request, we are happy to advise and recommend suitable mobile setups for your events." }
    ];

    return (
        <PageWrapper>
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-12">Frequently Asked Questions</h1>
            </div>
            <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </PageWrapper>
    );
};

export default FaqsPage;
