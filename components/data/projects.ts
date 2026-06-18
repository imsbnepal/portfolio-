export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Shristi Universe.",
    description: "Full-stack marketplace with real-time inventory and payment processing",
    longDescription: "Built a comprehensive e-commerce platform using Next.js, Node.js, and PostgreSQL. Features include real-time inventory management, Stripe payment integration, order tracking, and an admin dashboard.",
    image: "/images/project-1.jpg",
    tags: ["Next.js", "Java Spring Boot", "Dbeaver", "React", "Tailwind CSS"],
    link: "https://shristiuniverse.com",
    github: "https://github.com/imsbnepal",
    featured: true,
  },
 
  {
    id: 3,
    title: "Quiz App",
    description: "Interactive quiz application with real-time scoring and performance tracking.",
    longDescription: "Built a full-stack quiz application that allows users to participate in quizzes, view instant results, and track their performance over time. The application includes user authentication, multiple-choice questions, score calculation, leaderboard functionality, and responsive design. Developed using React, Spring Boot, and Tailwind CSS to deliver a fast and engaging learning experience.",
    image: "/images/project-3.jpg",
    tags: ["Java Spring Boot", "React", "Tailwind CSS"],
    link: "https://sunarsherbahadur.com.np",
    github: "https://github.com/imsbnepal",
    featured: true,
  },
  {
    id: 4,
    title: "Nepali Romanizer",
    description: "Java Maven library for bidirectional translation between Nepali Unicode and Romanized Nepali.",
    longDescription: "Developed a Java Maven library that enables seamless translation between Nepali Unicode text and Romanized Nepali. The library provides fast, accurate, and lightweight conversion APIs, making it easy to integrate Nepali typing and translation capabilities into Spring Boot applications, desktop software, and other Java projects. Designed with Unicode compatibility and developer-friendly APIs for simple integration.",
    image: "/images/project-4.jpg",
    tags: ["Java", "Maven Central", "Spring Boot", "Unicode", "Nepali NLP"],

    link: "https://github.com/imsbnepal/nepali-romanizer",
    github: "https://github.com/imsbnepal",
    featured: true,
  },
  {
    id: 5,
    title: "Indic Language Translator",
    description: "Java Maven library for translation between Nepali, Hindi, and Sanskrit languages.",
    longDescription: "Built a Java Maven library that provides translation support across Nepali, Hindi, and Sanskrit. The library supports Nepali ↔ Hindi, Nepali ↔ Sanskrit, and Hindi ↔ Sanskrit translations through a simple and extensible API. Designed for language-learning platforms, educational applications, and multilingual software, it offers easy integration with Java and Spring Boot projects while maintaining high performance and flexibility.",
    image: "/images/project-5.jpg",
    tags: ["Java", "Maven", "Spring Boot", "Unicode", "Nepali"],
    link: "https://github.com/imsbnepal/language-translator",
    github: "https://github.com/imsbnepal",
    featured: true,
  }, {
    id: 2,
    title: "Rent Management System",
    description: "Web-based platform for managing tenants, rent payments, and property records.",
    longDescription: "Developed a comprehensive rent management system that streamlines property administration, tenant management, rent collection, and payment tracking. Features include tenant registration, automated rent calculations, payment history, overdue notifications, and role-based access control. Built with React, Spring Boot, Firebase, and Tailwind CSS for a responsive and scalable user experience.",
    image: "/images/project-2.jpg",
    tags: ["React", "Java Spring Boot", "Firebase", "Tailwind CSS"],
    link: "",
    github: "https://github.com/imsbnepal",
    featured: true,
  }




];
