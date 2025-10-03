
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const HowItWorksPage = () => {
    const steps = [
        { title: "1. Connect Keg", description: "S-Type / Sankey, Micro Matic compatible.", image: "https://picsum.photos/500/500?random=17", alt: "Connecting a keg" },
        { title: "2. Cool", description: "Depending on the system: Refrigerator/Flash-Cooler.", image: "https://picsum.photos/500/500?random=18", alt: "Cooling system" },
        { title: "3. Tap & Serve", description: "Glass with ice, orange zest for Spritz.", image: "https://picsum.photos/500/500?random=19", alt: "Tapping a spritz" },
    ];
    return (
        <PageWrapper>
             <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect. Cool. Tap.</h1>
                <p className="text-xl max-w-3xl mx-auto text-gray-600">The process is designed for maximum simplicity and efficiency.</p>
            </div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {steps.map(step => (
                    <div key={step.title} className="bg-white p-8 rounded-lg shadow-lg">
                        <img src={step.image} alt={step.alt} className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"/>
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-20 bg-white p-10 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-4 text-center">Important Notes</h2>
                <ul className="space-y-4 max-w-2xl mx-auto list-disc list-inside">
                    <li><strong>Hygiene & Cleaning:</strong> Follow the provided instructions for optimal taste and safety.</li>
                    <li><strong>CO2/Nitrogen:</strong> System requirements vary. We can advise on the best setup.</li>
                    <li><strong>Flow Rate & Temperature:</strong> Recommended settings are provided according to system specs.</li>
                </ul>
            </div>
        </PageWrapper>
    );
};

export default HowItWorksPage;
