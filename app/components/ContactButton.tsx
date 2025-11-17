"use client";
import React from 'react';

const Button = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (!el) return;
    const offset = 64; // hauteur de la navbar fixe
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className="relative inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-full bg-gradient-to-r from-[var(--grad-start)] to-[var(--grad-end)] bg-size-200 hover:bg-pos-100 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl btn-glow--white"
      role="button"
    >
      <span className="relative z-10 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Me contacter
      </span>
    </a>
  );
};

export default Button;
