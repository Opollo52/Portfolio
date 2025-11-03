import React from 'react';

interface SkillCardProps {
  category: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const SkillCard = ({ category, skills }: SkillCardProps) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">{category}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-zinc-600 dark:text-zinc-300">{skill.name}</span>
              <span className="text-zinc-500 dark:text-zinc-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Front",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "PHP", level: 70 }
      ]
    },
    {
      category: "Back",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "SQL", level: 70 },
        { name: "PHPMyAdmin", level: 65 },
        { name: "MariaDB", level: 65 }
      ]
    },
    {
      category: "Outils & Méthodes",
      skills: [
        { name: "Git", level: 85 },
        { name: "Google Docs", level: 80 },
        { name: "Figma", level: 70 },
        { name: "Canva", level: 65 }
      ]
    }
  ];

  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-zinc-900 dark:text-zinc-100">
          Mes Compétences
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 text-center mb-12 max-w-2xl mx-auto">
          Un aperçu de mes compétences techniques et de mon niveau d'expertise dans différents domaines
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}