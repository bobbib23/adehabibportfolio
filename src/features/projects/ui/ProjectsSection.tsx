import { Section } from "@/shared/ui/Section";
import { projects } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-black/20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A selection of projects that showcase my skills and experience
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group bg-black/40 border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--primary)]/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-white group-hover:text-[var(--primary)] transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
