
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Button from '../components/Button';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        occasion: '',
        quantity: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        console.log('Form data submitted:', formData);
        setIsSubmitted(true);
    };

    return (
        <PageWrapper>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Fancy some Il Frezco?</h1>
                    <p className="text-xl text-gray-600 mb-6">Send us an inquiry – we will advise you on quantities, setup, and timing.</p>
                    <p className="text-md text-gray-500">Note: No direct ordering – individual consultation.</p>
                     <img src="https://picsum.photos/600/400?random=24" alt="Clean bar with glass on a counter" className="rounded-lg shadow-lg mt-8 w-full"/>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-2xl">
                    {isSubmitted ? (
                        <div className="text-center py-12">
                            <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
                            <p>Your request has been sent. We will get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" name="name" id="name" required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"/>
                            </div>
                             <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company / Business</label>
                                <input type="text" name="company" id="company" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"/>
                            </div>
                             <div>
                                <label htmlFor="occasion" className="block text-sm font-medium text-gray-700">Occasion</label>
                                <input type="text" name="occasion" id="occasion" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"/>
                            </div>
                             <div>
                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Estimated Quantity</label>
                                <input type="text" name="quantity" id="quantity" onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea name="message" id="message" rows={4} required onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"></textarea>
                            </div>
                            <div>
                                <Button type="submit" fullWidth>Send Inquiry</Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </PageWrapper>
    );
};

export default ContactPage;
