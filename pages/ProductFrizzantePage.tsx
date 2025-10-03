
import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import Button from '../components/Button';

const ProductFrizzantePage = () => {
    const advantages = [
        "Two uses: pure as Frizzante or as a mixing base",
        "Process advantages: fewer glass bottles & storage effort",
        "Flexibility: creative freedom for the bar team",
        "From Italy: authentic origin"
    ];

    return (
        <PageWrapper>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://picsum.photos/600/400?random=8" alt="Frizzante im Glas – Prosecco-Alternative im Fass" className="w-full rounded-lg shadow-lg" />
                </div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Il Frezco Frizzante (Base)</h1>
                    <p className="text-xl text-gray-600 mb-6">Italian Frizzante – enjoy pure or as a flexible basis for your own Aperitivo creations like Spritz, Hugo, or Bellini.</p>
                     <Link to="/contact">
                        <Button>Request for Il Frezco Frizzante</Button>
                    </Link>
                </div>
            </div>

            <div className="mt-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Advantages at a Glance</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                    {advantages.map((adv, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <svg className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <p className="text-lg">{adv}</p>
                        </div>
                    ))}
                </div>
            </div>

             <div className="mt-20 bg-white p-10 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-4">Pure or Mixed</h2>
                <p className="text-lg mb-4">
                    Our Frizzante is the perfect, high-quality base for a variety of drinks. It gives your team the freedom to create signature cocktails while benefiting from the efficiency of a tap system.
                </p>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <img src="https://picsum.photos/800/450?random=9" alt="Aperitivo station with two taps" className="rounded-lg shadow-lg w-full h-full object-cover"/>
                <img src="https://picsum.photos/400/300?random=10" alt="Bartender mixing with Frizzante" className="rounded-lg shadow-lg w-full h-full object-cover"/>
            </div>
        </PageWrapper>
    );
};

export default ProductFrizzantePage;
