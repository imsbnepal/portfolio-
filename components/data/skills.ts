export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 92 },
      { name: "Tailwind CSS", level: 94 },
      { name: "JavaScript", level: 95 },
      { name: "CSS/SCSS", level: 93 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Java Spring Boot", level: 88 },
      { name: "PostgreSQL, MySQL, Dbeaver", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Python", level: 78 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub, GitLab", level: 92 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Firebase", level: 85 },
      { name: "CI/CD", level: 80 },
    ],
  },
  {
    category: "Design & UX",
    skills: [
      { name: "UI/UX Design", level: 80 },
      { name: "Responsive Design", level: 93 },
      { name: "Accessibility (WCAG)", level: 85 },
      { name: "Design Systems", level: 88 },
    ],
  },
];
