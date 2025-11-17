"use client";
import React, { useMemo, useState } from 'react';

type Direction = 'left' | 'right';

const ALL_SKILLS = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'PHP',
  'Node.js',
  'Express',
  'SQL',
  'MariaDB',
  'PHPMyAdmin',
  'Git',
  'Figma',
  'Canva',
  'Google Docs',
];

function splitForRows(skills: string[]): [string[], string[], string[]] {
  // Crée trois lignes avec des ordres différents pour éviter la répétition visuelle
  const n = skills.length;
  const offset = Math.ceil(n / 3);
  const row1 = skills;
  const row2 = [...skills.slice(offset), ...skills.slice(0, offset)];
  const row3 = [...skills].reverse();
  return [row1, row2, row3];
}

const toNbsp = (s: string) => s.replace(/\s+/g, '\u00A0');

const TechIcon = ({ name }: { name: string }) => {
  const n = name.toLowerCase();
  const common = 'w-5 h-5';
  // Monochrome, hérite de currentColor pour s'intégrer au thème/hover
  if (n.includes('react')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
        <circle cx="12" cy="12" r="2.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(-60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      </svg>
    );
  }
  if (n.includes('next')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M4 6.5A8.5 8.5 0 1 1 6.5 20"/>
        <path d="M14 14L20 20"/>
      </svg>
    );
  }
  if (n.includes('tailwind')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 6c-3 0-4 2-5 3 1-1 2-1 3-1 2 0 3 1 4 2 1 1 2 2 4 2 3 0 4-2 5-3-1 1-2 1-3 1-2 0-3-1-4-2-1-1-2-2-4-2zM7 14c-3 0-4 2-5 3 1-1 2-1 3-1 2 0 3 1 4 2 1 1 2 2 4 2 3 0 4-2 5-3-1 1-2 1-3 1-2 0-3-1-4-2-1-1-2-2-4-2z"/>
      </svg>
    );
  }
  if (n === 'html') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M4 6h16M6 12h8M6 18h12"/>
      </svg>
    );
  }
  if (n === 'css') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M4 6h16M6 12h12M6 18h8"/>
      </svg>
    );
  }
  if (n.includes('javascript')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <text x="8" y="16" fontSize="8" fill="currentColor" fontFamily="monospace">JS</text>
      </svg>
    );
  }
  if (n.includes('typescript')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <text x="7" y="16" fontSize="8" fill="currentColor" fontFamily="monospace">TS</text>
      </svg>
    );
  }
  if (n.includes('node')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/>
      </svg>
    );
  }
  if (n.includes('express')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M4 7h16M4 12h10M4 17h8"/>
      </svg>
    );
  }
  if (n.includes('php')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <ellipse cx="12" cy="12" rx="9" ry="6"/>
      </svg>
    );
  }
  if (n.includes('mariadb') || n.includes('sql') || n.includes('phpmyadmin')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <ellipse cx="12" cy="6" rx="8" ry="3"/>
        <path d="M4 6v8c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/>
      </svg>
    );
  }
  if (n.includes('git')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M4 12l8-8 8 8-8 8-8-8z"/>
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    );
  }
  if (n.includes('figma')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <circle cx="10" cy="7" r="3"/>
        <circle cx="16" cy="7" r="3"/>
        <circle cx="10" cy="12" r="3"/>
        <rect x="13" y="9" width="6" height="6" rx="3"/>
        <circle cx="10" cy="17" r="3"/>
      </svg>
    );
  }
  if (n.includes('canva')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="9"/>
        <path d="M9 15c0-2 1.5-3 3-3s3-1 3-3"/>
      </svg>
    );
  }
  if (n.includes('google docs') || n.includes('google')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <rect x="5" y="3" width="14" height="18" rx="2"/>
        <path d="M9 8h6M9 12h6M9 16h4"/>
      </svg>
    );
  }
  return null;
};

const SkillBadge = ({ label }: { label: string }) => (
  <span className="skill-badge-marquee no-dot select-none">
    {TechIcon({ name: label })}
    {toNbsp(label)}
  </span>
);

const MarqueeRow = ({ items, direction, fast = false }: { items: string[]; direction: Direction; fast?: boolean }) => {
  // Duplique la liste pour créer une continuité parfaite (width:200%)
  const loopItems = [...items, ...items];
  return (
    <div className={`marquee-row ${fast ? 'fast' : ''} py-3`} data-direction={direction}>
      <div className="marquee-track">
        {loopItems.map((item, i) => (
          <SkillBadge key={i} label={item} />
        ))}
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const [view, setView] = useState<'marquee' | 'grid'>('marquee');
  const [row1, row2, row3] = splitForRows(ALL_SKILLS);

  const CATEGORIES = useMemo(() => ({
    Front: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    Back: ['PHP', 'Node.js', 'Express', 'SQL', 'MariaDB', 'PHPMyAdmin'],
    'Outils & Méthodes': ['Git', 'Figma', 'Canva', 'Google Docs'],
  }), []);

  const CategoryCard = ({ title, items }: { title: string; items: string[] }) => (
    <div className="group glass-effect rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--grad-start)] to-[var(--grad-end)] relative z-10">
        {title}
      </h3>
      <div className="relative z-10 flex flex-wrap gap-3">
        {items.map((label, i) => (
          <SkillBadge key={i} label={label} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 relative z-10" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-6 gradient-text">Mes Compétences</h2>
        <div className="flex items-center justify-center mb-10">
          <button
            type="button"
            onClick={() => setView(v => (v === 'marquee' ? 'grid' : 'marquee'))}
            className="btn-glow--white px-5 py-2 rounded-xl glass-effect border border-white/10 hover:border-cyan-400/50 transition-colors"
            aria-pressed={view === 'grid'}
            aria-label={view === 'marquee' ? 'Afficher par catégories' : 'Afficher en défilement'}
          >
            {view === 'marquee' ? 'Afficher par catégories' : 'Afficher le défilement'}
          </button>
        </div>
        {view === 'marquee' ? (
          <>
            <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
              Un panorama de mes technos. Trois lignes défilent automatiquement pour présenter les compétences que j'ai déjà testées.
            </p>
            <div className="space-y-6 max-w-6xl mx-auto">
              <MarqueeRow items={row1} direction="right" />
              <MarqueeRow items={row2} direction="left" fast />
              <MarqueeRow items={row3} direction="right" />
            </div>
          </>
        ) : (
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-300 text-center mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
              Vue compacte et lisible par catégories.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {Object.entries(CATEGORIES).map(([title, items]) => (
                <div key={title} className="h-full">
                  <CategoryCard title={title} items={items} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}