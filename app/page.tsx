import Image from "next/image";

import HeaderHero from './components/HeaderHero';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  const projects = [
    {
      title: "CinéLabs",
      description: "Un site avec une liste de film ainsi que des détails sur chaque film. Réalisé dans le cadre d'un projet académique.",
      imageUrl: "/projects/cinelabs.png",
      projectUrl: "https://github.com/votrecompte/projet1",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "TwoDevly",
      description: "Un site pour mon entreprise freelance de création de site web.",
      imageUrl: "/projects/twodevly.png",
      projectUrl: "https://twodevly.com",
      technologies: ["Next.js", "Node.js", "React"]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 font-sans dark:from-black dark:to-zinc-900">
      <main className="container mx-auto px-4 py-16">
        {/* Section Présentation */}
        <HeaderHero />

        {/* Section Projets */}
        <h2 className="text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100" id="projets">
          Mes Projets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
