import { MapPin, GraduationCap, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">About Me</h2>
          <div className="h-1 w-16 bg-primary mb-10 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="reveal space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a Computer Science graduate and software engineer based in Nairobi, Kenya. I love building 
              efficient, user-focused applications that solve real problems — from full-stack web apps to 
              AI-powered tools and mobile experiences.
            </p>
            <p>
              I care about writing clean, maintainable code, contributing to open source, and continuously 
              learning. When I'm not coding, I'm exploring new technologies, mentoring fellow developers, 
              or working on projects that make a positive impact in my community.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-foreground">
                <MapPin size={18} className="text-primary" />
                <span className="text-sm">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <GraduationCap size={18} className="text-primary" />
                <span className="text-sm">BSc Computer Science</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Code2 size={18} className="text-primary" />
                <span className="text-sm">Full-Stack Developer</span>
              </div>
            </div>
          </div>

          <div className="reveal">
            <h3 className="font-heading font-semibold text-lg mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript", "TypeScript", "Python", "C", "C++", "C#",
                "React", "Vue.js", "Node.js", "Laravel", "Flutter",
                "SQL", "PostgreSQL", "MongoDB", "GraphQL", "Docker", "Git", "Machine Learning", "REST APIs", "CI/CD", "Linux",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground border border-border font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
