export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  type: "work" | "education";
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Shirsti Universe.",
    position: "Full-Stack Developer",
    duration: "2021 - Present",
    description: "Leading development of scalable web applications using React, Next.js, Java, and Spring Boot. Architecting microservices, optimizing performance.",
    achievements: [
      "Architected and deployed microservices reducing load times by 40%",
      "Led migration from monolithic to serverless architecture",
      "Mentored 5+ junior developers on best practices",
      "Improved application performance through code optimization and caching strategies",
    ],
    type: "work",
  },
  
  
];
