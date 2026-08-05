export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
  level: number; // 1-100
}

export const skills: Skill[] = [
  { name: "JavaScript", category: "frontend", level: 95 },
  { name: "React", category: "frontend", level: 92 },
  { name: "Next.js", category: "frontend", level: 90 },
  { name: "HTML", category: "frontend", level: 98 },
  { name: "CSS", category: "frontend", level: 95 },
  { name: "TypeScript", category: "frontend", level: 88 },
  { name: "Tailwind CSS", category: "frontend", level: 90 },
  { name: "Spring Boot", category: "backend", level: 85 },
  { name: "Golang", category: "backend", level: 80 },
  { name: "Node.js", category: "backend", level: 85 },
  { name: "PostgreSQL", category: "backend", level: 82 },
  { name: "Git", category: "tools", level: 90 },
  { name: "Docker", category: "tools", level: 78 },
  { name: "REST API", category: "backend", level: 90 },
];
