export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  link: string;
  type: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Shirsti Universe.",
    position: "Full-Stack Developer",
    duration: "2021 - Present",
    description: "Leading development of scalable  web applications using React, Next.js, Java, and Spring Boot. Architecting microservices, optimizing performance.",
    achievements: [
      "Architected and deployed microservices reducing load times by 40%",
      "Led migration from monolithic to serverless architecture",
      "Mentored 5+ junior developers on best practices",
      "Improved application performance through code optimization and caching strategies",
    ],
    link: "https://shristiuniverse.com",
    type: "work",
  },
  {
    id: "2",
    company: "Quiz Master",
    position: "Full-Stack Developer",
    duration: "Present",
    description: "Leading development of scalable Quiz web applications using React, Next.js, Java, and Spring Boot. Architecting microservices, optimizing performance.",
    achievements: [
      "Architected and deployed microservices reducing load times by 40%",
      "Led migration from monolithic to serverless architecture",
      "Mentored 5+ junior developers on best practices",
      "Improved application performance through code optimization and caching strategies",
    ],
    link: "https://sunarsherbahadur.com.np",
    type: "project",
  }
  , {
    id: "3",
    company: "Gelje Sherpa",
    position: "Full-Stack Developer",
    duration: "Completed",
    description:
      "Designed and developed a modern, high-performance portfolio website for renowned mountaineer Gelje Sherpa using Next.js, React, and Tailwind CSS. Focused on responsive design, SEO optimization, and an engaging storytelling experience.",
    achievements: [
      "Built a fully responsive and visually immersive portfolio website",
      "Optimized SEO and page performance for faster load times",
      "Implemented smooth animations and interactive user experience",
      "Showcased expeditions, achievements, and media in a clean, scalable architecture",
    ],
    link: "https://gelje.sunarsherbahadur.com.np/",
    type: "project",
  }

];
