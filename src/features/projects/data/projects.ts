export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "CeisaCare - Official Technical Support Platform of DJBC",
    description:
      "Developed the official technical support platform for DJBC as a Frontend Developer, focusing on responsive UI development, API integration, and state management.",
    technologies: ["React", "Material UI", "Spring Boot", "PostgreSQL"],
    liveUrl: "https://ceisacare.beacukai.go.id",
  },
  {
    id: "2",
    title: "CEISA 4.0",
    description:
      "Worked as part of the maintenance team for CEISA 4.0, the integrated customs and excise service system of DJBC, focusing on frontend maintenance, bug fixing, and feature enhancements.",
    technologies: ["React", "ANT Design", "Spring Boot", "PostgreSQL"],
    liveUrl: "https://ceisa40.customs.go.id",
  },
  {
    id: "3",
    title: "PORTAL CEISA 4.0",
    description:
      "Worked as a Frontend Developer on the Portal Bea Cukai maintenance team, focusing on frontend maintenance, API integration, bug fixing, and feature development",
    technologies: ["React", "ANT Design", "Spring Boot", "PostgreSQL"],
    liveUrl: "https://portal.beacukai.go.id",
    githubUrl: "#",
  },
  {
    id: "4",
    title: "Your Projects",
    description:
      "Build your digital project on a strong foundation. I’m here to help you create modern, secure, well-structured, and maintainable applications that stay scalable and perform optimally in the long run.",
    technologies: ["React", "Tailwind CSS", "Spring Boot", "PostgreSQL"],
    liveUrl: "#contact",
  },
];
