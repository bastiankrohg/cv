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
    "Python",
    "C++",
    "C",
    "Java",
    "Javascript",
    "VHDL",
    "LabVIEW",
    "Shell",
    "Ada",
    "Assembly",
    "STM32",
    "ESP8266",
    "OpenAI API",
    // Add other skills from your CV
  ],
  projects: [
    {
      title: "Semi-autonomous Sailboat model",
      techStack: [
        "STM32",
        "Automatic rigging",
        "Remote controlled heading",
        "Anti-roll mechanism",
        "Peripherals",
        "Interrupts",
      ],
      description: "Group project to code diverse drivers and functions for peripherals and control it from the STM32 chipset.",
    },
    {
      title: "FPGA Ethernet controller",
      techStack: [
        "VHDL",
        "Ethernet protocol",
      ],
      description: "Lab assignment to code and implement an ethernet controller in VHDL.",
    },
    {
      title: "Electric Scooter",
      techStack: [
        "Digital control laws",
        "Power electronics",
        "Power converters",
        "STM32",
      ],
      description: "Electronics and Control engineering project. Designed and implemented the Feedback control torque mechanism for the electric motor.",
    },
    {
      title: "ML projects",
      techStack: ["Python"],
      description: "Lab work, implementing neural networks and learning trees in Python."
    },
    // Add projects from your CV in the provided format
  ],
} as const;
