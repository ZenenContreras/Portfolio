import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { href: "#services", label: "Servicios" },
    { href: "#technologies", label: "Tecnologías" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#191a1a]/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <nav className="h-full container mx-auto px-4 sm:px-6">
        <div className="h-full flex items-center justify-between">
          <div className="flex items-center">
            <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
            <span className="ml-2 text-lg sm:text-xl font-bold">PortafolioDev</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-sm lg:text-base hover:text-purple-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#191a1a]/95 backdrop-blur-sm border-b border-gray-800 py-4">
            <div className="container mx-auto px-4 space-y-4">
              {menuItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className="block hover:text-purple-500 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;