import { Section } from "@/shared/ui/Section";

export function AboutSection() {
  return (
    <Section id="about" className="bg-[var(--card)]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I am a passionate Web Developer with a strong foundation in both
              frontend and backend technologies. I love turning complex problems
              into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              My expertise spans the JavaScript ecosystem — from vanilla JS,
              HTML, and CSS to modern frameworks like React and Next.js. On the
              backend, I work with Spring Boot and Golang to build robust and
              scalable APIs.
            </p>
            <p>
              I focus on writing clean, maintainable code following best
              practices such as clean architecture and feature-based
              organization. Continuous learning and delivering high-quality
              products are at the core of my work.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-purple-500/20 border border-[var(--border)] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400">Years Experience</div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-black/40 rounded-lg p-3">
                  <div className="text-white font-semibold">30+</div>
                  <div className="text-gray-500">Projects</div>
                </div>
                <div className="bg-black/40 rounded-lg p-3">
                  <div className="text-white font-semibold">15+</div>
                  <div className="text-gray-500">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
