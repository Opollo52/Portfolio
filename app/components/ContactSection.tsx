'use client';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Initialiser EmailJS avec votre clé publique
const PUBLIC_KEY = "LH71dFzqysvQk9iw9";
const SERVICE_ID = "service_4bpffy8";
const TEMPLATE_ID = "template_mdyptki";

emailjs.init(PUBLIC_KEY);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (status !== 'error') {
      setErrorMessage('');
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    if (!formData.email || !formData.name || !formData.message) {
      setStatus('error');
      setErrorMessage('Veuillez remplir tous les champs');
      return;
    }

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setStatus('error');
        setErrorMessage('Veuillez entrer une adresse email valide');
        return;
      }

      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        to_name: 'Eliott Pissis',
        to_email: 'eliottpissis@gmail.com'
      };

      console.log('Envoi du message avec les paramètres:', templateParams);
      
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );

      console.log('Réponse EmailJS:', response);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Erreur détaillée:', error);
      setStatus('error');
      setErrorMessage('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 relative z-10" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-6 gradient-text">
          Me Contacter
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          Vous avez un projet en tête ? Je serais ravi d'en discuter avec vous et de donner vie à vos idées !
        </p>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[var(--grad-start)] to-[var(--grad-end)]">
                Coordonnées
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-4 rounded-xl shadow-lg group-hover:shadow-xl group-hover:shadow-cyan-500/25 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:eliottpissis@gmail.com" className="text-cyan-300 hover:text-white transition-colors duration-300 hover:underline">
                      eliottpissis@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-xl shadow-lg group-hover:shadow-xl group-hover:shadow-cyan-500/25 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Localisation</h4>
                    <p className="text-gray-300">
                      Caen, Normandie
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-4 rounded-xl shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/25 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Statut</h4>
                    <p className="text-gray-300">
                      À la recherche d'une alternance
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--grad-start)] to-[var(--grad-end)]">
                  Réseaux sociaux
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Opollo52"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-xl text-white hover:shadow-2xl hover:shadow-gray-800/25 transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/eliott-pissis-34384133b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-r from-[#0077b5] to-[#004182] p-4 rounded-xl text-white hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="glass-effect rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[var(--grad-start)] to-[var(--grad-end)]">
              Envoyez-moi un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass-effect border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass-effect border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl glass-effect border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet ou vos besoins..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 relative group ${
                  status === 'sending' 
                    ? 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[var(--grad-start)] to-[var(--grad-end)] hover:shadow-2xl hover:scale-105 btn-glow--white'
                } text-white`}
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : status === 'success' ? (
                  <span className="flex items-center justify-center text-white">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Message envoyé !
                  </span>
                ) : status === 'error' ? (
                  <span className="flex flex-col items-center justify-center text-white">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Erreur d'envoi
                    </span>
                    {errorMessage && (
                      <span className="text-sm mt-1 text-red-200">{errorMessage}</span>
                    )}
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Envoyer le message
                  </span>
                )}
              </button>
              
              {status === 'success' && (
                <div className="mt-4 p-4 glass-effect border border-green-400/50 rounded-xl">
                  <p className="text-green-300 text-center font-medium">✅ Message envoyé avec succès ! Je vous répondrai très bientôt.</p>
                </div>
              )}
              
              {status === 'error' && errorMessage && (
                <div className="mt-4 p-4 glass-effect border border-red-400/50 rounded-xl">
                  <p className="text-red-300 text-center font-medium">❌ {errorMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}