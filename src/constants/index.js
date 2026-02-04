import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  vighnotech,
  EliteForums,
  Digisir,
  Knowex,
  Carbon
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Vighnotech",
    icon: vighnotech,
    iconBg: "#383E56",
    date: "December 2024 - March 2024",
    points: [
      "Developed responsive and visually appealing landing pages for the company and its clients, optimized for user engagement and traffic growth.",
      "Collaborated with the design and marketing teams to align landing page UI/UX with business goals.",
      "In the final month, contributed to the development of the company's CRM product.",
      "Built a Dynamic Form Builder feature within the CRM, enabling users to create customizable, shareable forms to capture and manage leads efficiently.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Elite Forums",
    icon: EliteForums,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Aug 2024",
    points: [
      "Contributed as a Full Stack Developer Intern on two major products: DigiSir (web) and an Event Management App (mobile).",
      "Developed and maintained core features of DigiSir, a SaaS-based class management platform, using the MERN stack.",
      "Developed a cross-platform Event Management app in React Native with features like event creation, discovery, ticketing, and QR-based registration.",
      "Integrated Firebase for authentication, real-time updates, and media handling to ensure seamless mobile experience.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DigiSir",
    description:
      "A SaaS-based class management platform that allows users to create and manage classes, track attendance, and generate reports.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Digisir,
    source_code_link: "https://github.com/infohellodigisir/hellodigisir.git",
  },
  {
    name: "Knowex",
    description:
      "Knowlex is a dynamic community platform that lets users connect through posts, real-time chats, and events. From sharing updates to buying event tickets.",
    tags: [
      {
        name: "reactNaitive",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Knowex,
    source_code_link: "https://github.com/HackSmith010/KnowEX.git",
  },
  {
    name: "Carbon Emission Tracker",
    description:
      "A web application that helps users track and reduce their carbon footprint by logging daily activities and offering personalized eco-friendly tips.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: Carbon,
    source_code_link: "https://github.com/Mithivk/carbon_emission_frontend.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
