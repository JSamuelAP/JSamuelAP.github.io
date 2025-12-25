export type NavItem = {
  label: string;
  icon: string;
  href: string;
};

export const navigationItems: NavItem[] = [
  { label: 'Inicio', icon: 'home', href: '/' },
  { label: 'Habilidades', icon: 'tools', href: '/#skills' },
  { label: 'Experiencia', icon: 'briefcase', href: '/#experience' },
  { label: 'Proyectos', icon: 'app-window', href: '/#projects' },
  { label: 'Escolaridad', icon: 'school', href: '/#education' },
];
