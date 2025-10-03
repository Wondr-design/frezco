
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductSpritzPage from './pages/ProductSpritzPage';
import ProductFrizzantePage from './pages/ProductFrizzantePage';
import UseCasesPage from './pages/UseCasesPage';
import GastroChainsPage from './pages/GastroChainsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import EquipmentPage from './pages/EquipmentPage';
import AboutUsPage from './pages/AboutUsPage';
import FaqsPage from './pages/FaqsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/spritz" element={<ProductSpritzPage />} />
            <Route path="/products/frizzante" element={<ProductFrizzantePage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/gastro-chains" element={<GastroChainsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/equipment" element={<EquipmentPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </HashRouter>
  );
}

export default App;
