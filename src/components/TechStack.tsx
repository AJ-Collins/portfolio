const techCategories = [
  {
    title: "Languages",
    items: ["Python", "C", "C++", "C#", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Vue.js", "Laravel", "Yii", "Node.js", "Flutter", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "Docker", "SQL", "REST APIs", "Linux", "VS Code"],
  },
  {
    title: "AI & Data",
    items: ["Machine Learning", "AI Agents", "Data Analysis"],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">Tech Stack</h2>
          <div className="h-1 w-16 bg-primary mb-10 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((cat) => (
            <div key={cat.title} className="reveal">
              <h3 className="font-heading font-semibold text-sm text-primary mb-4 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="space-y-2">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-3 bg-card border border-border rounded-lg text-sm font-medium text-card-foreground hover:border-primary/40 transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
