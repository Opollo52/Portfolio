"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import ContactButton from "./ContactButton";

export default function HeaderHero() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState<string>("perspective(1000px) translateZ(0px)");
  const [transition, setTransition] = useState<string>("transform 400ms cubic-bezier(.03,.98,.52,.99)");
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 64; // navbar height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  function handleMove(e: React.MouseEvent) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx; // -1..1
    const dy = (y - cy) / cy;
    const rotateY = dx * 8; // degrees
    const rotateX = -dy * 8;
    const translateZ = 20; // lift amount
    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`);
    setTransition("transform 120ms linear");
  }

  function handleLeave() {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
    setTransition("transform 600ms cubic-bezier(.2,.8,.2,1)");
  }

  return (
    <section className="mx-auto w-full max-w-6xl">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 mb-20">
        <div className="flex-1 pr-8 md:text-left text-center relative z-10">
          <p className="text-lg md:text-xl text-gray-300 mb-3 font-medium animate-fade-in">Bonjour, je suis</p>
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-2">
            <span className="gradient-text">Eliott Pissis</span>
          </h1>
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--grad-start)] to-[var(--grad-end)] mb-6">
            Étudiant Développeur Web
          </h2>

          <p className="text-base text-gray-300 max-w-xl leading-7 mb-6 opacity-90">
            Actuellement en 2ème année à SUPINFO Caen, je suis passionné par le développement web et à la recherche d'une alternance. 
            Spécialisé en React, Next.js et Node.js, je souhaite mettre mes compétences au service de votre entreprise tout en poursuivant ma formation.
          </p>

          <div className="mb-8">
            <span className="inline-flex items-center gap-3 px-6 py-4 glass-effect text-white rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              Disponible pour une alternance en développement web
            </span>
          </div>

          <div className="flex items-center gap-6 justify-center md:justify-start">
            <ContactButton />
            
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:underline decoration-[var(--grad-start)]"
            >
              Voir mes projets →
            </a>
          </div>
        </div>

        <div className="w-80 md:w-96 h-80 md:h-96 relative flex-shrink-0 mx-auto md:mx-0">
          <div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ transform: transformStyle, transition }}
            className="absolute inset-0 rounded-3xl glass-effect shadow-[0_30px_50px_rgba(2,6,23,0.4)] overflow-hidden border-2 border-white/20 will-change-transform backdrop-blur-xl"
          >
            {/* Effets de gradient animés (teal/sky) */}
            <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400/40 to-sky-400/40 filter blur-2xl opacity-60 pointer-events-none floating"></div>
            <div className="absolute -left-8 -bottom-8 w-56 h-56 rounded-full bg-gradient-to-tr from-teal-400/30 to-sky-400/30 filter blur-2xl opacity-50 pointer-events-none floating" style={{animationDelay: '2s'}}></div>
            
            {/* Overlay gradient (midnight blue tint) */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1b2a43]/20 pointer-events-none"></div>
            
            <Image
              src="/profil.jpeg"
              alt="Photo d'Eliott Pissis"
              width={384}
              height={384}
              className="object-cover w-full h-full relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
