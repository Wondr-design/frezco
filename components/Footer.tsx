
import React from 'react';
import { Link } from 'react-router-dom';

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx={4} cy={4} r={2} />
    </svg>
);


const Footer = () => {
  return (
    <footer className="bg-brand-secondary text-brand-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-2">Il Frezco</h3>
            <p className="text-brand-primary font-semibold">Let it spritz.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:info@ilfrezco.com" className="hover:text-brand-primary">info@ilfrezco.com</a></li>
              <li><a href="tel:+41000000000" className="hover:text-brand-primary">+41 00 000 00 00</a></li>
              <li>Frezco AG</li>
              <li>Musterstrasse 1, 8000 Zürich</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-brand-primary"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-brand-primary"><LinkedInIcon /></a>
            </div>
            <h4 className="font-bold text-lg mb-4 mt-6">Downloads</h4>
            <ul className="space-y-2">
                <li><a href="#" className="hover:text-brand-primary underline">Product Data Sheets (PDF)</a></li>
                <li><a href="#" className="hover:text-brand-primary underline">Tapping Instructions (PDF)</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Il Frezco. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/imprint" className="hover:text-brand-primary">Imprint</Link>
            <Link to="/privacy" className="hover:text-brand-primary">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
