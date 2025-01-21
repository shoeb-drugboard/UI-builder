interface NavItem {
  id: number;
  name: string;
  link: string;
  icon: React.ComponentType;
  download?: boolean;
}
import {
  Home,
  Info,
  Contact,
  Facebook,
  Linkedin,
  Github,
  Package,
  FileText,
} from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with payment integration and admin dashboard",
    link: "https://github.com/username/ecommerce",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
  },
  {
    id: 2,
    name: "Weather App",
    description: "Real-time weather application with location-based forecasts",
    link: "https://github.com/username/weather-app",
    techStack: ["React", "TypeScript", "OpenWeather API", "Tailwind CSS"],
  },
  {
    id: 3,
    name: "Task Management System",
    description: "Collaborative task management tool with real-time updates",
    link: "https://github.com/username/task-manager",
    techStack: ["Next.js", "Firebase", "Material-UI", "TypeScript"],
  },
  {
    id: 4,
    name: "Portfolio Website",
    description:
      "Personal portfolio website with 3D animations and interactive elements",
    link: "https://github.com/username/portfolio",
    techStack: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
  },
];

export const navigationLinks: NavItem[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: Home,
  },
  {
    id: 2,
    name: "About",
    link: "/3d-profile/about",
    icon: Info,
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
    icon: Contact,
  },
  {
    id: 4,
    name: "Facebook",
    link: "https://facebook.com",
    icon: Facebook,
  },
  {
    id: 5,
    name: "LinkedIn",
    link: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    id: 6,
    name: "GitHub",
    link: "https://github.com",
    icon: Github,
  },
  {
    id: 7,
    name: "Projects",
    link: "/3d-profile/projects",
    icon: Package,
  },
  {
    id: 8,
    name: "Resume",
    link: "/Shoeb-Uddin-Resume_intern.pdf",
    icon: FileText,
    download: true,
  },
];

export const socialMediaLinks: NavItem[] = [
  {
    id: 4,
    name: "Facebook",
    link: "https://facebook.com",
    icon: Facebook,
  },
  {
    id: 5,
    name: "LinkedIn",
    link: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    id: 6,
    name: "GitHub",
    link: "https://github.com",
    icon: Github,
  },
];
