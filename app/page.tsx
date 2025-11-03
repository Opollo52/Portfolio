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
    <div id="home" className="min-h-screen bg-gradient-to-br from-white to-blue-50 font-sans dark:from-black dark:to-zinc-900">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12">
          <HeaderHero />
        </div>

        {/* Projects Section */}
        <section className="py-20" id="projects">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">
              Mes Projets
            </h2>
            <div className="max-w-5xl mx-auto">
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
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
