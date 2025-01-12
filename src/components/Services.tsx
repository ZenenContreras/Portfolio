import React from 'react';
import { Code2, Layout, Smartphone, Globe2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Desarrollo Web",
      icon: <Code2 className="h-12 w-12 text-purple-500" />,
      description: "Creación de sitios web modernos y aplicaciones web utilizando las últimas tecnologías y mejores prácticas."
    },
    {
      title: "Diseño UI/UX",
      icon: <Layout className="h-12 w-12 text-purple-500" />,
      description: "Diseño de interfaces intuitivas y experiencias de usuario atractivas que cautivan a los visitantes."
    },
    {
      title: "Desarrollo Responsive",
      icon: <Smartphone className="h-12 w-12 text-purple-500" />,
      description: "Sitios web adaptables que funcionan perfectamente en todos los dispositivos y tamaños de pantalla."
    },
    {
      title: "SEO y Optimización",
      icon: <Globe2 className="h-12 w-12 text-purple-500" />,
      description: "Optimización para motores de búsqueda y mejora del rendimiento para una mejor visibilidad online."
    }
  ];

  return (
    <section id="services" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16 font-space">
        Servicios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-200 border border-gray-700/50"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-gray-700/30 rounded-2xl group-hover:bg-purple-500/20 transition-colors duration-200">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-space">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;