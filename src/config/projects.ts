import capySoftThumbnail from '../assets/images/projects/capysoft-thumbnail.jpeg';
import portafolioThumbnail from '../assets/images/projects/portafolio-thumbnail.jpeg';
import innovaTubeThumbnail from '../assets/images/projects/innovatube-thumbnail.jpeg';

export type Project = {
  id: string;
  name: string;
  description: string;
  thumbnail: ImageMetadata;
  technologies: string[];
  repositoryUrl?: string;
  liveDemoUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'portfolio',
    name: 'Mi portafolio web',
    description:
      'Sitio web estático donde muestro mis habilidades y proyectos para darme a conocer como desarrollador de software.',
    thumbnail: portafolioThumbnail,
    technologies: ['Astro', 'Tailwind CSS', 'DaisyUI'],
    repositoryUrl: 'https://github.com/JSamuelAP/JSamuelAP.github.io',
    liveDemoUrl: 'https://jsamuelap.github.io',
  },
  {
    id: 'innovatube',
    name: 'InnovaTube',
    description:
      'Plataforma para buscar videos y guardarlos como favoritos. Fue una prueba técnica del área de innovación en Grupo Castores.',
    thumbnail: innovaTubeThumbnail,
    technologies: ['Angular', 'PrimeNG', 'Node.js', 'TypeScript', 'Express.js', 'Supabase'],
    repositoryUrl: 'https://github.com/JSamuelAP/innovatube',
    liveDemoUrl: 'https://innovatube-jsamuelap.netlify.app',
  },
  {
    id: 'capysoft',
    name: 'CapySoft',
    description:
      'Punto de venta para la cafeteria El rincón del Capibara. Proyecto escolar que incluye microservicios.',
    thumbnail: capySoftThumbnail,
    technologies: ['Angular', 'PrimeNG', 'Java', 'Spring Boot', 'MySQL', 'Docker'],
    repositoryUrl: 'https://github.com/JSamuelAP/capysoft',
  },
];
