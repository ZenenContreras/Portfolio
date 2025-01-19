import React, { lazy, Suspense } from 'react';
import { ExternalLink, Github } from 'lucide-react';
const LazyImage = lazy(() => import('./LazyImage'));

const Projects = () => {
  const projects = [
    {
      title: "Arrienda Tu Finca",
      description: "Plataforma completa de gestión y alquiler de fincas con sistema de reservas, pagos y administración. Desarrollada con Angular, Spring Boot y Docker.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["Angular", "Spring Boot", "Docker", "PostgreSQL", "JWT", "Bootstrap"],
      github: "https://github.com/zenencontreras",
      demo: "https://arriendatufinca.com",
      features: [
        "Sistema de autenticación y autorización",
        "Panel de administración para propietarios",
        "Gestión de reservas en tiempo real",
        "Integración con pasarela de pagos",
        "Despliegue containerizado con Docker"
      ]
    },
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico moderna con carrito de compras y pasarela de pagos",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/zenencontreras",
      demo: "https://demo.com"
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con características de colaboración en tiempo real",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      github: "https://github.com/zenencontreras",
      demo: "https://demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard del clima con pronósticos detallados y visualizaciones de datos",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React", "D3.js", "Weather API", "Tailwind CSS"],
      github: "https://github.com/zenencontreras",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16 font-space">
        Mis Proyectos
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-colors duration-300"
          >
            <div className="relative overflow-hidden aspect-video">
              <Suspense fallback={<div className="w-full h-full bg-gray-800 animate-pulse" />}>
                <LazyImage 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </Suspense>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3 font-space group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              {project.features && (
                <ul className="list-disc list-inside mb-6 text-gray-400 space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm">{feature}</li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-purple-500 transition-colors"
                >
                  <Github className="h-5 w-5 mr-2" />
                  Código
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-purple-500 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;