import type { SvgComponent } from 'astro/types';

import angularSvg from '../assets/images/skills/angular.svg';
import astroSvg from '../assets/images/skills/astro-icon-light.svg';
import bootstrapSvg from '../assets/images/skills/bootstrap.svg';
import eslintSVg from '../assets/images/skills/eslint.svg';
import expressjsSvg from '../assets/images/skills/expressjs.svg';
import figmaSvg from '../assets/images/skills/figma.svg';
import githubSvg from '../assets/images/skills/github_light.svg';
import gitSvg from '../assets/images/skills/git.svg';
import javaSvg from '../assets/images/skills/java.svg';
import mysqlSvg from '../assets/images/skills/mysql.svg';
import nodejsSvg from '../assets/images/skills/nodejs.svg';
import prettierSvg from '../assets/images/skills/prettier.svg';
import requirementsEngineeringSvg from '../assets/images/skills/requirements-engineering.svg';
import springbootSvg from '../assets/images/skills/spring.svg';
import sqlServerSvg from '../assets/images/skills/sql-server.svg';
import tailwindcssSvg from '../assets/images/skills/tailwindcss.svg';
import typescriptSvg from '../assets/images/skills/typescript.svg';
import umlSvg from '../assets/images/skills/uml.svg';

export type Skill = {
  name: string;
  src: SvgComponent & ImageMetadata;
  description: string;
};

export const skills: Record<string, Skill[]> = {
  backend: [
    { name: 'TypeScript', src: typescriptSvg, description: 'Lenguaje de programación' },
    { name: 'Node.js', src: nodejsSvg, description: 'Entorno de ejecución para JavaScript' },
    { name: 'Express.js', src: expressjsSvg, description: 'Framework para Node.js' },
    { name: 'Java', src: javaSvg, description: 'Lenguaje de programación' },
    { name: 'Spring Boot', src: springbootSvg, description: 'Framework para Java' },
    { name: 'MySQL', src: mysqlSvg, description: 'Sistema de gestión de bases de datos relacional' },
    { name: 'SQL Server', src: sqlServerSvg, description: 'Sistema de gestión de bases de datos relacional' },
  ],
  frontend: [
    { name: 'Angular', src: angularSvg, description: 'Framework para crear aplicaciones web' },
    { name: 'Astro', src: astroSvg, description: 'Framework para crear sitios web estáticos' },
    { name: 'Tailwind CSS', src: tailwindcssSvg, description: 'Framework CSS' },
    { name: 'Bootstrap', src: bootstrapSvg, description: 'Framework de componentes CSS' },
    { name: 'Figma', src: figmaSvg, description: 'Herramienta de diseño UI/UX' },
  ],
  otras: [
    { name: 'Git', src: gitSvg, description: 'Sistema de control de versiones' },
    { name: 'GitHub', src: githubSvg, description: 'Plataforma para alojar proyectos Git' },
    {
      name: 'Ingeniería de Requerimientos',
      src: requirementsEngineeringSvg,
      description: 'Toma y definición de requerimientos',
    },
    { name: 'UML', src: umlSvg, description: 'Lenguaje Unificado de Modelado' },
    { name: 'Prettier', src: prettierSvg, description: 'Herramienta de formateo de código' },
    { name: 'ESLint', src: eslintSVg, description: 'Herramienta de análisis para JavaScript' },
  ],
};
