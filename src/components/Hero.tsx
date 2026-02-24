import { ArrowDown, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 text-center">      

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6 animate-fade-up">
          Collins Kiprotich
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground font-heading font-medium mb-4" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
          Software Engineer & CS Graduate
        </p>

        <p className="max-w-xl mx-auto text-muted-foreground mb-10 leading-relaxed" style={{ animationDelay: "0.2s" }}>
          Building robust, scalable software solutions from Kenya.
          Passionate about clean code, open source, and solving real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="hero" size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View My Work
          </Button>
          <Button variant="hero-outline" size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Contact Me
          </Button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 text-muted-foreground">
          <a href="https://github.com/AJ-Collins" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Github size={22} />
          </a>
          <a href="mailto:kiprocolloaj254@gmail.com" className="hover:text-primary transition-colors">
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
