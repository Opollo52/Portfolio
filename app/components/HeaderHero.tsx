"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import ContactButton from "./ContactButton";

export default function HeaderHero() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState<string>("perspective(1000px) translateZ(0px)");
  const [transition, setTransition] = useState<string>("transform 400ms cubic-bezier(.03,.98,.52,.99)");

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
        <div className="flex-1 pr-8 md:text-left text-center">
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 mb-3 font-medium">Bonjour, je suis</p>
          <h1 className="text-6xl md:text-7xl font-extrabold text-blue-500 leading-tight mb-2">Eliott Pissis</h1>
          <h2 className="text-2xl font-semibold text-zinc-300 mb-6">Étudiant Développeur Web</h2>

          <p className="text-base text-zinc-500 dark:text-zinc-400 max-w-xl leading-7 mb-6">
            Actuellement en 2ème année à SUPINFO Caen, je suis passionné par le développement web et à la recherche d'une alternance. 
            Spécialisé en React, Next.js et Node.js, je souhaite mettre mes compétences au service de votre entreprise tout en poursuivant ma formation.
          </p>

          <div className="mb-8">
            <span className="inline-flex items-center gap-3 px-5 py-3 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-base font-medium shadow-sm">
              🔍 Disponible pour une alternance en développement web
            </span>
          </div>

          <div className="flex items-center gap-6 justify-center md:justify-start">
            <ContactButton />
            
            <a
              href="#projets"
              className="text-zinc-300 hover:text-zinc-400 transition-colors"
            >
              Voir mes projets
            </a>
          </div>
        </div>

        <div className="w-80 md:w-96 h-80 md:h-96 relative flex-shrink-0 mx-auto md:mx-0">
          <div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ transform: transformStyle, transition }}
            className="absolute inset-0 rounded-2xl bg-white dark:bg-zinc-900 shadow-[0_30px_50px_rgba(2,6,23,0.2)] overflow-hidden border border-transparent will-change-transform"
          >
            <div className="absolute -right-8 -top-8 w-96 h-96 rounded-2xl bg-gradient-to-br from-blue-200/60 to-white/30 filter blur-3xl opacity-80 pointer-events-none"></div>
            <Image
              src="/profile.jpg"
              alt="Photo d'Eliott Pissis"
              width={384}
              height={384}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
