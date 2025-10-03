
import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import Button from '../components/Button';

const ProductSpritzPage = () => {
    const advantages = [
        "Speed: high output rate during peak times",
        "Efficiency: less staff required, higher service frequency",
        "Consistency: identical taste at every location",
        "Ideal for large events: Weddings, banquets, festivals, chains"
    ];

    return (
        <PageWrapper>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://picsum.photos/600/400?random=5" alt="Vorgemixter Spritz aus dem Fass wird gezapft" className="w-full rounded-lg shadow-lg" />
                </div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Il Frezco Spritz (Premix)</h1>
                    <p className="text-xl text-gray-600 mb-6">Ready to Serve – the Italian Spritz in a keg. No mixing, no bottle handling – constant quality served in seconds.</p>
                    <Link to="/contact">
                        <Button>Request for Il Frezco Spritz</Button>
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
                <h2 className="text-3xl font-bold mb-4">Details</h2>
                <p className="text-lg mb-4">
                    Il Frezco Spritz is a pre-mixed, perfectly balanced Aperitivo. Tapped directly from the keg, it enables fast processes and plannable quality – whether on the terrace, in a mountain restaurant, or at a festival stand.
                </p>
                <p className="text-md text-gray-500">
                    Note on ingredients: The premix contains approved ingredients for stable quality. No sustainability claims – focus is on taste, speed, and processes.
                </p>
            </div>
            
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <img src="https://picsum.photos/800/450?random=6" alt="Service at an event" className="rounded-lg shadow-lg w-full h-full object-cover"/>
                <img src="https://picsum.photos/400/300?random=7" alt="Tap in action" className="rounded-lg shadow-lg w-full h-full object-cover"/>
            </div>
        </PageWrapper>
    );
};

export default ProductSpritzPage;
