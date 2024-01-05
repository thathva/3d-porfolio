import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  cimpress,
  superstars,
  csharp,
  angular,
  api,
  aws,
  core,
  firebase,
  flask,
  java,
  jenkins,
  python,
  reactnative,
  sql,
  video,
  geeksdeck,
  docs,
  newsreader,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Software Engineer",
    icon: creator,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
];

const technologies: TTechnology[] = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "RESTful API",
    icon: api,
  },
  {
    name: "Amazon Web Services",
    icon: aws,
  },
  {
    name: ".NET Core",
    icon: core,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React Native",
    icon: reactnative,
  },
  {
    name: "SQL",
    icon: sql,
  },
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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

const experiences: TExperience[] = [
  {
    title: "Angular Developer Intern",
    companyName: "Superstars",
    icon: superstars,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Developed and maintained web applications built with Angular.js.",
      "Collaborated with stakeholders to refine requirements resulting in high-quality products.",
      "Implemented responsive design and ensuredcross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to other interns.",
    ],
  },
  {
    title: "Software Engineer",
    companyName: "Cimpress",
    icon: cimpress,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Aug 2022",
    points: [
      "Implemented performance improvements to the platform using AWS Lambda, AWS S3 and through Powershell scripts.",
      "Building features for a web application using C#, .NET Core, SQL and Javascript.",
      "Collaborated with cross-functional teams in an Agile environment to optimize processes to achieve timely and top-tier product outcomes.",
      "Optimized a microservice built on .NET Core and React.js frontend using caching and lazy loading.",
      "Participated in code reviews ensuring coding standards and quality were maintained.",
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "Video Content Moderation and Subtitle Generation",
    description:
      "Developed a cloud-based solution using AWS services (Rekognition, Transcribe, EC2, Amplify, S3) to streamline content creation’s post-production phase. Used Python Boto3 SDK to interface AWS services.",
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: video,
    sourceCodeLink: "https://github.com/thathva/video-moderation-subtitle-generation",
  },
  {
    name: "GeeksDeck",
    description:
      "Developed a mobile application for creating and managing flashcards by enabling categorization based on topics. Implemented features to create flashcards and categories. Interfaced with Firebase to store images. ",
      tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: 'firebase',
        color: "orange-text-gradient",
      }
    ],
    image: geeksdeck,
    sourceCodeLink: "https://github.com/thathva/geeksdeck",
  },
  {
    name: "Google Docs Clone",
    description:
"Built with React.js, Node.js and Socket Programming. Stored document IDs in MongoDB to persist data.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "socketio",
        color: "orange-text-gradient"
      }
    ],
    image: docs,
    sourceCodeLink: "https://github.com/thathva/google-docs-clone",
  },
  {
    name: "News AI Reader",
    description:
"Web application to read out news on command. Used Alan AI API for speech recognition and News API for latest news.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient"
      }
    ],
    image: newsreader,
    sourceCodeLink: "https://github.com/thathva/news-ai-reader",
  },
];

export { services, technologies, experiences, testimonials, projects };
