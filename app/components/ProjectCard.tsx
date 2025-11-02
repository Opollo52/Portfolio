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
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-zinc-800 transition-transform hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover"
          priority
          unoptimized
        />
      </div>
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-zinc-900 dark:text-zinc-100">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-300 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-zinc-200 dark:bg-zinc-700 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 dark:text-zinc-300 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="px-6 pb-4">
        <Link
          href={projectUrl}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le projet
        </Link>
      </div>
    </div>
  );
}