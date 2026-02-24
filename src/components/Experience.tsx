const timeline = [
  {
    type: "education",
    title: "BSc Computer Science",
    org: "Technical University of Mombasa",
    period: "2019 — 2023",
    description: "Graduated with a strong foundation in algorithms, data structures, software engineering, and AI.",
  },
  {
    type: "work",
    title: "Software Engineer (Freelance)",
    org: "Self-Employed",
    period: "2022 — Present",
    description: "Building full-stack web and mobile applications for clients across East Africa and Germany. Specializing in Python, Node, React, Laravel, and Flutter.",
  },
  {
    type: "work",
    title: "Open Source Contributor",
    org: "Various Projects",
    period: "2021 — Present",
    description: "Contributing to open source projects on GitHub. Active in developer communities and mentoring junior developers.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">Experience & Education</h2>
          <div className="h-1 w-16 bg-primary mb-10 rounded-full" />
        </div>

        <div className="relative max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div key={i} className="reveal relative pl-12">
                {/* Dot */}
                <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />

                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {item.type === "education" ? "Education" : "Experience"}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.period}</span>
                </div>
                <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{item.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
