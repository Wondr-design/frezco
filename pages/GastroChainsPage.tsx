
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const GastroChainsPage = () => {
    const benefits = [
        "Consistent taste & service time",
        "Centralized procurement & simplified logistics",
        "Training kit & checklists for teams",
        "Promos & seasonal activations (optional)"
    ];
    return (
        <PageWrapper>
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <img src="https://picsum.photos/800/450?random=16" alt="Team training session with uniform bar setup" className="w-full rounded-lg shadow-lg" />
                </div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Consistency, Scalability & Process Reliability</h1>
                    <p className="text-xl text-gray-600 mb-6">Il Frezco enables identical quality, clear SOPs, and predictable output rates across all locations. Roll-out ready with central training and standardized recipes (Spritz) or flexible guidelines (Frizzante).</p>
                </div>
            </div>
            
            <div className="mt-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Benefits for Chains</h2>
                </div>
                 <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <svg className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <p className="text-lg">{benefit}</p>
                        </div>
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
};

export default GastroChainsPage;
