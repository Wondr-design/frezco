
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const UseCasesPage = () => {
    const useCases = [
        { title: "Events & Festivals", description: "Sport, Lifestyle, Open Airs – fast service for large crowds.", image: "https://picsum.photos/500/500?random=11", alt: "Spritz service at a festival" },
        { title: "Weddings & Banquets", description: "High demand, elegant service speed.", image: "https://picsum.photos/500/500?random=12", alt: "Aperitivo toast at a wedding" },
        { title: "Terraces & Beach Bars", description: "Summery high-turnover spots.", image: "https://picsum.photos/500/500?random=13", alt: "Drinks on a sunny terrace" },
        { title: "Mountain Restaurants", description: "Efficient processes during peak times.", image: "https://picsum.photos/500/500?random=14", alt: "View from a mountain restaurant" },
        { title: "Gastro Chains", description: "Standardized processes & quality.", image: "https://picsum.photos/500/500?random=15", alt: "Modern restaurant interior" }
    ];
    return (
        <PageWrapper>
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">For Everyone Who Wants to Serve Quickly, Efficiently & Stylishly</h1>
                <p className="text-xl max-w-3xl mx-auto text-gray-600">Il Frezco is the ideal solution for high-demand situations where speed and consistent quality are crucial.</p>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {useCases.map((uc) => (
                    <div key={uc.title} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                        <img src={uc.image} alt={uc.alt} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"/>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">{uc.title}</h3>
                            <p>{uc.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </PageWrapper>
    );
};

export default UseCasesPage;
