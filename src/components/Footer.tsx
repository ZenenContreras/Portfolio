import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800/50 backdrop-blur-sm text-gray-400 py-8 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} Zenen Contreras. Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center text-sm">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>usando React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;