
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const EquipmentPage = () => {
    const details = [
        "Keg Connection: S-Type (Sankey)",
        "Accessories: Tap head, hoses, spouts, optional CO2/compressor",
        "Consultation: We recommend suitable setups for events & stationary use"
    ];
    return (
        <PageWrapper>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <img src="https://picsum.photos/600/400?random=20" alt="PET Keg with tap head" className="w-full rounded-lg shadow-lg" />
                </div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Works with Common Tapping Systems</h1>
                    <p className="text-xl text-gray-600 mb-6">Il Frezco is delivered in PET kegs (S-Coupler / Sankey). Compatible with common Micro Matic systems. If required, we recommend mobile 1- to 2-line tapping systems including accessories.</p>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Technical Details</h2>
                </div>
                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {details.map((detail, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <svg className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <p className="text-lg">{detail}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <img src="https://picsum.photos/800/400?random=21" alt="Connection diagram illustration" className="max-w-3xl mx-auto rounded-lg shadow-md" />
                </div>
            </div>
        </PageWrapper>
    );
};

export default EquipmentPage;
