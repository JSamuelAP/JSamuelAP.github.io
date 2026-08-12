export type Experience = {
  title: string;
  company: string;
  location: string;
  current?: boolean;
  startLabel: string;
  endLabel?: string;
  startDate: string; // YYYY-MM
  endDate?: string; // YYYY-MM
  activities: string[];
};

export const experiences: Experience[] = [
  {
    title: 'Desarrollador Java',
    company: 'Sistemas Premium',
    location: 'León Guanajuato, México',
    current: false,
    startLabel: 'Enero 2026',
    endLabel: 'Julio 2026',
    startDate: '2026-01',
    endDate: '2026-07',
    activities: [
      'Participación en un proyecto de facturación electrónica para el Banco del Bajío como consultor de desarrollo. Desarrollo y migración de microservicios con Spring Boot y arquitectura hexagonal, implementación de procesamiento orientado a eventos con Kafka y Web Sockets, diseño y optimización de bases de datos SQL Server y JPA, desarrollo del frontend con Angular y PrimeNG, integración con PAC para timbrado de CFDI y aplicación de mecanismos de ciberseguridad mediante JWT, certificados digitales y cifrado de información.',
      'Esta solución ha permitido que el sellado y timbrado de miles de constancias se reduzca de horas e incluso días a pocos minutos. También se está logrando mejorar la transparencia y trazabilidad de la información procesada para los usuarios.',
    ],
  },
  {
    title: 'Analista desarrollador',
    company: 'Grupo Castores',
    location: 'León Guanajuato, México',
    startLabel: 'Enero 2025',
    endLabel: 'Diciembre 2025',
    startDate: '2025-01',
    endDate: '2025-12',
    activities: [
      'Diseñé y desarrollé el frontend de una plataforma interna para la consulta de nómina por medio de gafetes, logrando disminuir al 100% el uso de papel para la impresión de recibos de nómina y mejorando la usabilidad.',
      'Análisis, desarrollo e implementación de tickets para atender incidencias y agregar funcionalidades a los sistemas internos, aplicando buenas prácticas de codificación en sistemas administrativos, contables y operativos (microservicios, servicios web y APIs).',
      'Colaboré en la digitalización de la documentación del personal; aprendí y apliqué tecnologías como Angular, Node y TypeScript, además del manejo de archivos en el proceso.',
    ],
  },
  {
    title: 'Auxiliar de desarrollo',
    company: 'Grupo Castores',
    location: 'León Guanajuato, México',
    startLabel: 'Junio 2024',
    endLabel: 'Enero 2025',
    startDate: '2024-06',
    endDate: '2025-01',
    activities: [
      'Apoye en el desarrollo de un módulo para la asignación automática de cursos a operadores que se encuentran en el corporativo, incrementando el número de asistencias en aproximadamente un 50%. Mis responsabilidades fueron el diseño de interfaces con Bootstrap y JSP, creación de endpoints en Java Spring MVC y optimización de consultas MySQL.',
      'Diseñe, optimice e implemente la automatización de la creación de pólizas de las nóminas de estibadores, donde se logró mejorar la transparencia de movimientos financieros de todas las sucursales del país y reducir 3 días de trabajo que empleaba el área de nóminas foráneas en la creación de dichas pólizas. Aquí desarrollé mis habilidades de ingeniería en software, tales como usar una metodología ágil, levantamiento de requerimientos, diagramación con UML, planeación y ejecución de pruebas, documentación y comunicación con el usuario.',
    ],
  },
];

export default experiences;
