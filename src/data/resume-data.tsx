import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Bastian Krohg",
  initials: "BK",
  location: "Toulouse, France",
  locationLink: "https://www.google.com/maps/place/Toulouse",
  about:
    "Emerging engineer with a strong foundation in embedded systems and a passion for innovation in technology",
  summary:
    "An aspiring engineer with a background in embedded systems and international experience. Currently enhancing skills in international management and engineering, with internships in hardware engineering and business development. Fluent in multiple languages and experienced in a diverse range of programming languages and tools.",
  avatarUrl: "[Your avatar URL here]",
  personalWebsiteUrl: "[Your personal website URL here]",
  contact: {
    email: "baskrohg@gmail.com",
    tel: "+4741206672",
    social: [
      {
        name: "GitHub",
        url: "[Your GitHub URL here]",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bastiankrohg/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "[Your additional social media or personal URL here]",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Toulouse School of Management",
      degree: "Master’s degree in International Management",
      start: "2022",
      end: "2025",
    },
    {
      school: "INSA de Toulouse",
      degree: "Master’s degree in Embedded Systems Engineering",
      start: "2019",
      end: "2025",
    },
    {
      school: "Seoul National University",
      degree: "Exchange student in Electrical and Computer Engineering",
      start: "2021",
      end: "2021",
    },
    {
      school: "Asker Upper Secondary School",
      degree: "Scientific Orientation",
      start: "2015",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Innovation Norway Silicon Valley",
      link: "[URL for Innovation Norway Silicon Valley]",
      badges: ["Internship"],
      title: "Intern International Business Development",
      logo: "[Innovation Norway Logo]",
      start: "2023",
      end: "present",
      description:
        "Engaged in international business development in Silicon Valley at Nordic Innovation House.",
    },
    // Other work experiences can be similarly formatted
  ],
  skills: [
    "Norwegian",
    "English",
    "French",
    "Italian",
    "MS Office",
    "Python",
    "C++",
    "C",
    "Java",
    "FPGA",
    "LabVIEW",
    "Shell",
    "Assembly",
    // Add other skills from your CV
  ],
  projects: [
    // Add projects from your CV in the provided format
  ],
} as const;
