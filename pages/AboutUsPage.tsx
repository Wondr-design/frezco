
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const AboutUsPage = () => {
    return (
        <PageWrapper>
             <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">From Italy to Zürich – Aperitivo as a Lifestyle</h1>
            </div>

            <div className="mt-12 grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-2">
                    <img src="https://picsum.photos/400/533?random=22" alt="Portrait of the team/founder in a natural setting" className="rounded-lg shadow-lg w-full"/>
                </div>
                <div className="md:col-span-3">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Il Frezco was born from Italian roots – grown up in a large family of food and wine people. We bring this way of life into a modern format: Spritz & Frizzante in a keg, made for high service demands and convivial moments. Our passion is to combine authentic Italian taste with Swiss efficiency to create unforgettable experiences.
                    </p>
                </div>
            </div>

            <div className="mt-20">
                <img src="https://picsum.photos/1200/600?random=23" alt="Italian atmosphere with a vineyard or piazza" className="w-full rounded-lg shadow-lg" />
            </div>
        </PageWrapper>
    );
};

export default AboutUsPage;
