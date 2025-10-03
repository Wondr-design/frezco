
import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import Button from '../components/Button';

const CheckIcon = () => (
    <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const HomePage = () => {
  const keyBenefits = [
    { title: 'Speed', description: 'Ready to serve in seconds - no mixing, no bottle handling.' },
    { title: 'Efficiency', description: 'Less staff effort, faster processes, more turnover.' },
    { title: 'Consistency', description: 'Consistent taste & quality at all locations.' },
    { title: 'Made in Italy', description: 'Produced in Italy - authentic Aperitivo enjoyment.' },
  ];

  const useCases = ['Events & Festivals', 'Weddings & Banquets', 'Terraces & Beach Bars', 'Mountain Restaurants', 'Gastro Chains'];
  
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[90vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <img src="https://picsum.photos/1920/1080?random=1" alt="Freshly tapped Spritz in a glass on a summer terrace" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>
        <div className="relative z-20 px-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Il Frezco – Let it spritz.</h1>
          <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto">Italian Aperitivo enjoyment, fast & efficient – directly from the tap.</p>
          <div className="mt-8">
            <Link to="/contact">
              <Button>Send Request</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <PageWrapper>
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-12">Key Benefits</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyBenefits.map(benefit => (
            <div key={benefit.title} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-4"><CheckIcon /></div>
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </PageWrapper>

      {/* Products Teaser Section */}
      <div className="bg-white">
        <PageWrapper>
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Two Paths to the Perfect Aperitivo</h2>
                <p className="max-w-2xl mx-auto text-lg mb-10">Choose between a ready-mixed Spritz in a keg – or Frizzante as a flexible base for your own creations.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden shadow-xl group">
                    <img src="https://picsum.photos/600/400?random=2" alt="Il Frezco Spritz in glass" className="w-full h-64 object-cover" />
                    <div className="p-8">
                        <h3 className="text-3xl font-bold mb-4">Il Frezco Spritz</h3>
                        <Link to="/products/spritz"><Button variant="secondary">Learn More</Button></Link>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-xl group">
                    <img src="https://picsum.photos/600/400?random=3" alt="Il Frezco Frizzante in Prosecco glass" className="w-full h-64 object-cover" />
                    <div className="p-8">
                        <h3 className="text-3xl font-bold mb-4">Il Frezco Frizzante</h3>
                        <Link to="/products/frizzante"><Button variant="secondary">Learn More</Button></Link>
                    </div>
                </div>
            </div>
        </PageWrapper>
      </div>

      {/* Use Cases Teaser */}
      <PageWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <img src="https://picsum.photos/800/600?random=4" alt="Event photo with crowd and bar station" className="rounded-lg shadow-lg"/>
            </div>
            <div>
                <h2 className="text-4xl font-bold mb-4">Where Il Frezco Makes the Difference</h2>
                <ul className="space-y-2 list-disc list-inside text-lg mb-6">
                    {useCases.map(uc => <li key={uc}>{uc}</li>)}
                </ul>
                <Link to="/use-cases"><Button>Explore Use Cases</Button></Link>
            </div>
        </div>
      </PageWrapper>
      
      {/* How it works Teaser */}
       <div className="bg-white">
        <PageWrapper className="text-center">
            <h2 className="text-4xl font-bold mb-4">Connect. Chill. Tap.</h2>
            <p className="max-w-2xl mx-auto text-lg mb-8">Uniform processes for every business. It's that simple.</p>
            <div className="flex justify-center items-center space-x-4 md:space-x-8 text-xl font-semibold">
                <span>Connect Keg</span>
                <span className="text-brand-primary">&rarr;</span>
                <span>Cool</span>
                <span className="text-brand-primary">&rarr;</span>
                <span>Tap</span>
            </div>
            <div className="mt-8">
              <Link to="/how-it-works"><Button>See How It Works</Button></Link>
            </div>
        </PageWrapper>
      </div>

       {/* Final CTA Section */}
      <PageWrapper>
        <div className="bg-brand-secondary text-white p-12 rounded-lg text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Ready for Il Frezco?</h2>
          <p className="max-w-xl mx-auto text-lg mb-8">Send us your inquiry - we will advise you on the best solution for your business or your event.</p>
          <Link to="/contact"><Button>Send Request</Button></Link>
        </div>
      </PageWrapper>
    </>
  );
};

export default HomePage;
