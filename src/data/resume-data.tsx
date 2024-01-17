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
  location: "Oslo, Norway",
  locationLink: "https://www.google.com/maps/place/Oslo",
  about:
    "Emerging engineer with a strong foundation in embedded systems and a passion for innovation and impact in technology",
  summary:
    "Aspiring embedded systems engineer with an international background. Currently finishing up my dual master's degree at INSA de Toulouse and Toulouse School of Management, graduating summer 2025. Fluent in multiple languages and experience from a diverse range of programming languages and technologies.",
  avatarUrl: "https://github.com/bastiankrohg.png",
  personalWebsiteUrl: "[Your personal website URL here]",
  contact: {
    email: "baskrohg@gmail.com",
    tel: "+4741206672",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/bastiankrohg",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bastiankrohg/",
        icon: LinkedInIcon,
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
      link: "https://www.nordicinnovationhouse.com/siliconvalley",
      badges: ["Internship"],
      title: "Intern International Business Development",
      logo: "[Innovation Norway Logo]",
      start: "2023",
      end: "present",
      description:
        "Engaged in international business development in Silicon Valley at Nordic Innovation House.",
    },
    {
    company: "Thales Norway AS",
    link: "[https://www.thalesgroup.com/en/countries/europe/thales-norway]",
    badges: ["Internship"],
    title: "Intern Hardware Engineering Department",
    logo: "[Thales Norway AS Logo]",
    start: "Jun 2023",
    end: "Aug 2023",
    description:
      "Internship in the Hardware Engineering Department focusing on Automation and Test Methods.",
    },
    {
    company: "Thales Norway AS",
    link: "[https://www.thalesgroup.com/en/countries/europe/thales-norway]",
    badges: ["Internship"],
    title: "Intern Software Engineering",
    logo: "[Thales Norway AS Logo]",
    start: "Jun 2022",
    end: "Aug 2022",
    description:
      "Internship involving porting an existing QT VoIP client from Linux/Windows to support the mobile platform Android.",
    },
    {
    company: "AS Insignia",
    link: "[https://insignia.no/]",
    badges: ["Internship"],
    title: "Intern Software Technician and Mechanic",
    logo: "[AS Insignia Logo]",
    start: "Jun 2020",
    end: "Aug 2020",
    description:
      "Performed software updates and troubleshooting on EV model Jaguar I-Pace. Assisted in mechanical work, storage reorganization, and management. Served as a French-Norwegian translator and interpreter.",
    },
    {
    company: "Norwegian Armed Forces",
    link: "[https://www.forsvaret.no/om-forsvaret/organisasjon/sjoforsvaret/kystvakten]",
    badges: ["Military Service"],
    title: "Operations Assistant",
    logo: "[Norwegian Armed Forces Logo]",
    start: "Sept 2018",
    end: "Aug 2019",
    description:
      "Seaman second class on board NOCGV 'Nordkapp' in the Operations department, assisting in the organization, planning, and execution of the vessel’s operations.",
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
