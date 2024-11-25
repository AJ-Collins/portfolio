import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-gray-400 text-lg">Hi there! I'm</h2>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                  Collins Kiprotich
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-200">
                Software Engineer 
              </h2>
            </div>
            
            <p className="text-gray-400 text-lg max-w-lg">
              I craft exceptional digital experiences with modern technologies.
              Specializing in full-stack development, cloud architecture, and UI/UX design.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-4 text-gray-400">
                <a href="https://github.com/AJ-Collins" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/collins-kiprotich-2708672a5" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://mail.google.com/mail" 
                className="hover:text-white transition-colors"
                rel="noopener noreferrer" 
                target="_blank"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-72 h-72 mx-auto md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse blur-2xl opacity-20"></div>
              <div className="relative rounded-full overflow-hidden border-2 border-gray-800">
                <img
                  src= "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;