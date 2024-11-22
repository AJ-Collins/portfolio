import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "Smart task management platform using OpenAI's GPT for task prioritization and intelligent scheduling.",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    image: "https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?auto=format&fit=crop&q=80&w=2072",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    title: "E-Commerce Analytics Dashboard",
    description: "Real-time analytics dashboard for e-commerce platforms with predictive sales forecasting.",
    tags: ["TypeScript", "Next.js", "TailwindCSS", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Blockchain Voting System",
    description: "Secure and transparent voting system built on Ethereum blockchain with smart contracts.",
    tags: ["Solidity", "Web3.js", "React", "Ethereum"],
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=2070",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    title: "Real-Time Collaboration Tool",
    description: "WebSocket-based collaboration platform for real-time document editing and team communication.",
    tags: ["Socket.io", "Express", "Redis", "React"],
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=2094",
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg">
            Explore my latest work in web development and artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="relative p-6 z-20 -mt-20">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;