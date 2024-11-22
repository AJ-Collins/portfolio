import React from 'react';
import { Code2, Rocket, Users, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Code2 className="w-6 h-6" />, value: '5+', label: 'Years Experience' },
    { icon: <Rocket className="w-6 h-6" />, value: '50+', label: 'Projects Completed' },
    { icon: <Users className="w-6 h-6" />, value: '20+', label: 'Happy Clients' },
    { icon: <Coffee className="w-6 h-6" />, value: '∞', label: 'Coffee Cups' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg">
            I'm a passionate developer with expertise in building modern web applications.
            With a strong foundation in both front-end and back-end development,
            I create scalable solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;