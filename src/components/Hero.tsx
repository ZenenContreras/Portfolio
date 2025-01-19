import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="h-full flex flex-col justify-center p-8">
      <div className="text-center">
        <div className="mb-8">
          <img
            src="/public/Pfp.jpeg"
            alt="Zenen Contreras - Frontend Developer"
            className="w-30 h-30 rounded-full mx-auto object-cover ring-4 ring-purple-500/30"
          />
        </div>
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Frontend Developer
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Hola! Soy Zenen y me apasiona diseñar y desarrollar experiencias web excepcionales que combinan funcionalidad y diseño innovador.
        </p>
        <button className="w-full px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-full font-medium transition-colors duration-200 mb-8">
          Descargar CV
        </button>
        
        <div className="flex justify-center space-x-4">
          <SocialLink href="https://github.com" icon={<Github />} />
          <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
          <SocialLink href="mailto:tu@email.com" icon={<Mail />} />
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-gray-400 hover:text-purple-500 transition-colors duration-200"
  >
    <div className="w-6 h-6">{icon}</div>
  </a>
);

export default Hero;