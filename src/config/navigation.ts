export interface NavItem {
  label: string;
  icon: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: 'Inicio', icon: 'home', href: '/' },
  { label: 'Stack', icon: 'tools', href: '/#stack' },
  { label: 'Experiencia', icon: 'briefcase', href: '/#experience' },
  { label: 'Proyectos', icon: 'app-window', href: '/#projects' },
  { label: 'Escolaridad', icon: 'school', href: '/#education' },
];
