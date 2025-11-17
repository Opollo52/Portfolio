"use client";
import React from "react";

export default function Navbar() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    // height of navbar (h-16 = 4rem = 64px)
    const offset = 64;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect h-16 px-6 flex items-center border-b border-white/10">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--grad-start)] to-[var(--grad-end)] flex items-center justify-center shadow-lg">
          <span className="font-bold text-lg text-white">E</span>
        </div>
        <span className="gradient-text font-bold text-xl">Eliott</span>
      </div>
      
      {/* Links */}
      <div className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')} 
          className="text-gray-200 font-medium hover:text-cyan-300 transition-all duration-300 relative group"
        >
          Accueil
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--grad-start)] to-[var(--grad-end)] group-hover:w-full transition-all duration-300"></span>
        </a>
        <a 
          href="#projects" 
          onClick={(e) => handleNavClick(e, 'projects')} 
          className="text-gray-300 hover:text-cyan-300 transition-all duration-300 relative group"
        >
          Projets
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--grad-start)] to-[var(--grad-end)] group-hover:w-full transition-all duration-300"></span>
        </a>
        <a 
          href="#about" 
          onClick={(e) => handleNavClick(e, 'about')} 
          className="text-gray-300 hover:text-cyan-300 transition-all duration-300 relative group"
        >
          À Propos
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--grad-start)] to-[var(--grad-end)] group-hover:w-full transition-all duration-300"></span>
        </a>
        <a 
          href="#skills" 
          onClick={(e) => handleNavClick(e, 'skills')} 
          className="text-gray-300 hover:text-cyan-300 transition-all duration-300 relative group"
        >
          Compétences
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--grad-start)] to-[var(--grad-end)] group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>
      
      <div className="ml-auto flex items-center gap-3">
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')} 
          className="px-6 py-2 bg-gradient-to-r from-[var(--grad-start)] to-[var(--grad-end)] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 btn-glow--white"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
