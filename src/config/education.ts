export type Education = {
  title: string;
  institution: string;
  current?: boolean;
  startYear: number; // YYYY
  endYear?: number; // YYYY
  details: string[];
};

export const educationHistory: Education[] = [
  {
    title: 'Ingeniería en Sistemas Computacionales',
    institution: 'Instituto Tecnológico de León',
    startYear: 2020,
    endYear: 2025,
    details: [
      'POO en Java',
      'Bases de datos con SQL Server',
      'Ingeniería de Software',
      'Redes y telecomunicaciones',
      'Administración de servidores con Active Directory',
      'Programación de Hardware',
      'Computo en la nube con AWS y Google Cloud',
      'DevOps con Docker y Jenkins',
      'Microservicios con Spring Boot',
    ],
  },
  {
    title: 'Especialidad Programación',
    institution: 'Centro Bachillerato Tecnológico Industrial y de Servicios Diego Rivera 225',
    startYear: 2017,
    endYear: 2020,
    details: [
      'Aplicaciones de escritorio con Visual Basic y Visual Studio',
      'Bases de datos con Access y SQL',
      'Aplicaciones web con HTML y CSS',
      'Aplicaciones móviles con Xamarin',
      'Sistemas Operativos Windows y Linux',
      'Redes',
      'E-Commerce con PrestaShop',
      'Administración E-Learning con Moodle',
    ],
  },
];
