import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-900" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
              À Propos de Moi
            </h2>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-300">
              <p>
                Je suis un étudiant développeur web passionné, actuellement en 2ème année à SUPINFO Caen.
                Mon parcours m'a permis d'acquérir une solide base en développement web moderne, avec une
                spécialisation en technologies React et Node.js.
              </p>
              <p>
                Ce qui me motive particulièrement, c'est de créer des expériences web innovantes qui
                combinent performance technique et design intuitif. Je suis constamment en train
                d'apprendre de nouvelles technologies et de me tenir à jour avec les dernières
                tendances du développement web.
              </p>
              <p>
                Je suis à la recherche d'une alternance qui me permettra de mettre en pratique mes
                compétences tout en continuant à apprendre et à grandir professionnellement.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
              >
                <span>Télécharger mon CV</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
              
              <a
                href="https://github.com/Opollo52"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-800 text-white px-6 py-3 rounded-full hover:bg-zinc-700 transition"
              >
                <span>GitHub</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-square w-full max-w-md mx-auto relative">
              <Image
                src="/about.jpg"
                alt="Photo de profil en situation de travail"
                width={500}
                height={500}
                className="rounded-2xl object-cover shadow-xl"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">2+</div>
                <div className="text-sm">Années d'études en développement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}