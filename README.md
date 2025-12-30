# Portafolio JSamuel

Sitio web estático para mostrar mis habilidades y darme a conocer como desarrollador web.

![Captura de pantalla de la página principal](https://github.com/user-attachments/assets/bd56b9c6-cd5c-4737-9be2-dcc68d3774ff)

## 🔎 Demo

[https://jsamuelap.github.io/](https://jsamuelap.github.io/)

## ✨ Características

- Responsivo
- Minimalista
- Descripción y datos de contacto
- Habilidades tecnológicas
- Historial laboral
- Proyectos
- Historial académico

## 🧰 Stack

### Frontend

![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-1AD1A5?logo=daisyui&logoColor=white)

### Herramientas

![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=gray)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white)
![Commitlint](https://img.shields.io/badge/Commitlint-black?logo=commitlint&logoColor=white)
![Lint-staged](https://img.shields.io/badge/lint--staged-red)
![Husky](https://img.shields.io/badge/Husky-gray)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=githubactions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=githubpages&logoColor=white)

## 🗂️ Estructura del proyecto

```text
jsamuelap.github.io/
├── .github/
│   └── workflows/                      # Flujos de trabajo de GitHub Actions
|       └── ci.yml                      # Integración continua para los pull requests
|       └── deploy.yml                  # Despliegue en GitHub Pages
├── public/
│   └── favicon.svg                     # Favicon del sitio
│   └── CV-Jose-Samuel-Aldana-Perez.pdf # Curriculum
├── src/
│   ├── assets/                         # Recursos gráficos
│   │   └── images/
|   |       └── projects/               # Miniaturas de la sección Proyectos
|   |       └── skills/                 # Iconos de las tecnologías de la sección Habilidades
|   |       └── jsamuel-logo.svg        # Logo principal
│   ├── components/
│   │   ├── BottomNavbar.astro          # Dock para pantalla mobile
│   │   ├── CardProject.astro           # Tarjeta de proyecto
│   │   ├── Education.astro             # Sección Educación
│   │   ├── Experience.astro            # Sección Experiencia
│   │   ├── Footer.astro                # Pie de página
│   │   ├── Hero.astro                  # Sección introductoria
│   │   ├── Navbar.astro                # Barra de navegación para pantallas grandes
│   │   |── Projects.astro              # Sección Proyectos
│   │   ├── SectionContainer.astro      # Layout y encabezado para las secciones
│   │   ├── Skill.astro                 # Logo y texto para las tecnologías de la sección Habilidades
│   │   └── Skills.astro                # Sección Habilidades
│   ├── config/
│   │   |── education.ts                # Datos del historial académico
|   |   |── experience.ts               # Datos del historial laboral
|   |   |── navigation.ts               # Items del menu de navegación
|   |   |── projects.ts                 # Datos de los proyectos
|   |   └── skills.ts                   # Tecnologías y habilidades
│   ├── layouts/
│   │   └── BaseLayout.astro            # Layout principal
│   ├── pages/
│   │   └── index.astro                 # Página principal
│   ├── styles/
│   │   └── global.css                  # Estilos globales y configuración de Tailwind y DaisyUI
│   └── utils/
│       └── utils.astro                 # Funciones de utilidad
├── tests/                              # Pruebas unitarias
├── .lintstagedrc                       # Configuración de lint-staged
├── .prettierignore                     # Archivos y carpetas ignorados por Prettier
├── .prettierrc                         # Configuración de Prettier
├── astro.config.mjs                    # Configuración de Astro
├── commitlint.config.js                # Configuración de commitlint
├── eslint.config.js                    # Configuración de ESLint
├── package.json                        # Dependencias y scripts
└── tsconfig.json                       # Configuración deTypeScript
```

## 💻 Desarrollo local

Clonar el repositorio

```bash
git clone https://github.com/JSamuelAP/JSamuelAP.github.io.git
```

Ir al directorio

```bash
cd JSamuelAP.github.io
```

Instalar dependencias

```bash
npm install
```

Iniciar el servidor de desarrollo de Astro

```bash
npm run dev
```

### Otros scripts

Compilar proyecto y visualizarlo

```bash
npm run build
npm run preview
```

Analizar código con ESLint y arreglarlo

```bash
npm run lint
```

Formatear con Prettier

```bash
npm run format
```

Ejecutar todos los tests

```bash
npm test
```

Ejecutar tests en modo desarrollo

```bash
npm run test:watch
```

Ejecutar ESLint y Prettier sobre los archivos en el stage

```bash
npx lint-staged
```

Probar si un mensaje de commit sigue las reglas de conventional commits

```bash
echo "test messages here" | node_modules/.bin/commitlint
```

## 🔗 Contacto

[![linkedin badge](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jsamuelap/)

[![github badge](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JSamuelAP)

[![email badge](https://img.shields.io/badge/email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sp4619168@gmail.com)

## ⚖️ Licencia

El código fuente de este proyecto está licenciado bajo la licencia [MIT](https://choosealicense.com/licenses/mit/).

Todos los recursos visuales (logotipos, imágenes, capturas de pantalla, marca personal) NO están cubiertos por esta licencia y no pueden reutilizarse sin permiso explícito.
