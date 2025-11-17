import Image from "next/image";

import HeaderHero from './components/HeaderHero';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

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
    <div id="home" className="min-h-screen font-sans">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 relative min-h-[calc(100vh-64px)] flex items-center">
          <HeaderHero />
        </div>

        {/* Projects Section */}
        <section className="py-24 relative" id="projects">
          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <h2 className="text-5xl font-bold text-center mb-4 gradient-text">
              Mes Projets
            </h2>
            {/* Barre soulignée sur le thème pour harmoniser avec les autres sections */}
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[var(--grad-start)] to-[var(--grad-end)] rounded-full mb-8" />
            <p className="text-xl text-center text-gray-300/90 mb-16 max-w-2xl mx-auto">
              Découvrez mes réalisations les plus récentes, alliant créativité et expertise technique
            </p>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <div className="relative">
          <AboutSection />
        </div>

        {/* Skills Section */}
        <div className="relative">
          <SkillsSection />
        </div>

        {/* Contact Section */}
        <div className="relative">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
