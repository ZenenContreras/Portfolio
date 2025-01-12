import React from 'react';
import { Code2, Home, Layers, FolderGit2, Mail, Github, Linkedin } from 'lucide-react';

const SideNav = () => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-[300px] bg-gray-800 border-r border-gray-700 p-6 flex flex-col">
      <div className="flex items-center mb-12">
        <Code2 className="h-8 w-8 text-purple-500" />
        <span className="ml-3 text-xl font-bold font-space">DevPortfolio</span>
      </div>

      <div className="space-y-6 flex-1">
        <NavItem href="#home" icon={<Home />} text="Inicio" />
        <NavItem href="#technologies" icon={<Layers />} text="Tecnologías" />
        <NavItem href="#projects" icon={<FolderGit2 />} text="Proyectos" />
        <NavItem href="#contact" icon={<Mail />} text="Contacto" />
      </div>

      <div className="pt-6 border-t border-gray-700">
        <div className="flex space-x-4">
          <SocialLink href="https://github.com" icon={<Github />} />
          <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
          <SocialLink href="mailto:tu@email.com" icon={<Mail />} />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
  <a
    href={href}
    className="flex items-center space-x-3 text-gray-300 hover:text-purple-500 transition-colors duration-200 group"
  >
    <div className="w-5 h-5">{icon}</div>
    <span className="font-medium group-hover:translate-x-1 transition-transform duration-200">
      {text}
    </span>
  </a>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-gray-400 hover:text-purple-500 transition-colors duration-200"
  >
    <div className="w-5 h-5">{icon}</div>
  </a>
);

export default SideNav;