import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: string[];
}

export default function ProjectCard({ title, description, imageUrl, projectUrl, technologies }: ProjectCardProps) {
  return (
    <div className="group max-w-sm rounded-2xl overflow-hidden glass-effect border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 relative">
      {/* Gradient overlay animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          priority
          unoptimized
        />
        {/* Overlay gradient sur l'image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>
      
      <div className="px-6 py-4 relative z-10">
  <h3 className="font-bold text-xl mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 text-base leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="px-6 pt-4 pb-2 relative z-10">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-200 mr-2 mb-2 border border-white/20 hover:bg-teal-500/20 hover:border-cyan-400/50 transition-all duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="px-6 pb-6 relative z-10">
        <Link
          href={projectUrl}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--grad-start)] to-[var(--grad-end)] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg btn-glow--white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Voir le projet</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </div>
    </div>
  );
}