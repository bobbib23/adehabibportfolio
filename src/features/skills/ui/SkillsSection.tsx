import { Section } from "@/shared/ui/Section";
import { skills } from "../data/skills";

export function SkillsSection() {
  const categories = [
    { key: "frontend" as const, title: "Frontend" },
    { key: "backend" as const, title: "Backend" },
    { key: "tools" as const, title: "Tools & Others" },
  ];

  return (
    <Section id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.key}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              {cat.title}
            </h3>
            <div className="space-y-4">
              {skills
                .filter((s) => s.category === cat.key)
                .map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--primary)] rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
