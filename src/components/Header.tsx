import React from 'react';
import { Code2, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { href: "#technologies", label: "Tecnologías" },
    { href: "#services", label: "Servicios" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#191a1a]/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <nav className="h-full container mx-auto px-4 sm:px-6">
        <div className="h-full flex items-center justify-between">
          <a href="#" className="flex items-center" onClick={(e) => scrollToSection(e, "#")}>
            <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
            <span className="ml-2 text-lg sm:text-xl font-bold text-white">PortafolioDev</span>
          </a>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm lg:text-base text-gray-300 hover:text-purple-500 transition-colors duration-200"
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
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block text-gray-300 hover:text-purple-500 transition-colors duration-200"
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