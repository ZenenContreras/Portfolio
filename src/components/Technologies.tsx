import React from 'react';
import {
  Code2,
  Database,
  Globe,
  Palette,
  MonitorSmartphone,
  FileType2,
  Wind,
  Boxes,
  Server,
  Cpu,
  GitBranch,
  Terminal,
  Monitor,
  Figma,
  Smartphone,
  Layout
} from 'lucide-react';

const Technologies = () => {
  const techs = [
    {
      category: "Frontend",
      icon: <Code2 className="h-8 w-8 text-purple-500" />,
      skills: [
        { name: "React", icon: <MonitorSmartphone className="h-5 w-5" /> },
        { name: "TypeScript", icon: <FileType2 className="h-5 w-5" /> },
        { name: "Tailwind CSS", icon: <Wind className="h-5 w-5" /> },
        { name: "Next.js", icon: <Boxes className="h-5 w-5" /> }
      ]
    },
    {
      category: "Backend",
      icon: <Database className="h-8 w-8 text-purple-500" />,
      skills: [
        { name: "Node.js", icon: <Server className="h-5 w-5" /> },
        { name: "Express", icon: <Cpu className="h-5 w-5" /> },
        { name: "PostgreSQL", icon: <Database className="h-5 w-5" /> }
      ]
    },
    {
      category: "Tools",
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      skills: [
        { name: "Git", icon: <GitBranch className="h-5 w-5" /> },
        { name: "VS Code", icon: <Terminal className="h-5 w-5" /> },
        { name: "Docker", icon: <Boxes className="h-5 w-5" /> }
      ]
    },
    {
      category: "Design",
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      skills: [
        { name: "Figma", icon: <Figma className="h-5 w-5" /> },
        { name: "UI/UX", icon: <Layout className="h-5 w-5" /> },
        { name: "Responsive Design", icon: <Smartphone className="h-5 w-5" /> }
      ]
    }
  ];

  return (
    <section id="technologies" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16 font-space animate-fade-in">
        Tecnologías
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techs.map((tech, index) => (
          <div 
            key={index} 
            className="group bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-700/50 animate-fade-in"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            <div className="flex items-center mb-6">
              {tech.icon}
              <h3 className="text-2xl font-semibold text-white ml-3 font-space">{tech.category}</h3>
            </div>
            <ul className="space-y-4">
              {tech.skills.map((skill, skillIndex) => (
                <li 
                  key={skillIndex} 
                  className="text-gray-300 flex items-center space-x-3 group/skill hover:text-purple-400 transition-colors duration-200"
                >
                  <span className="text-purple-500 group-hover/skill:text-purple-400 transition-colors duration-200">
                    {skill.icon}
                  </span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;