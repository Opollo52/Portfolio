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
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm h-16 px-6 flex items-center shadow-sm border-b border-blue-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="font-bold text-lg text-white">E</span>
        </div>
        <span className="text-blue-500 font-semibold text-xl">Eliott</span>
      </div>
      {/* Links */}
  <div className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-blue-600 font-medium">Accueil</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-zinc-600 hover:text-blue-600 transition">Projets</a>
      <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="text-zinc-600 hover:text-blue-600 transition">Compétences</a>
      <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-zinc-600 hover:text-blue-600 transition">À Propos</a>
      </div>
      {/* Contact Button */}
      <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="ml-auto bg-blue-500 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-600 transition">
        Me Contacter
      </a>
    </nav>
  );
}
