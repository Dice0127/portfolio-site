/**
 * Portfolio content — single source of truth.
 *
 * To add a new PROJECT: push a new object to `projects` below.
 * To add a new CERTIFICATE: push a new object to `certifications` below.
 * To add a new EXPERIENCE / MILESTONE: push a new object to `experience` below.
 * Components (Hero.jsx, Dashboard.jsx) just render whatever is here —
 * you never need to touch component/layout code to update content.
 */

export const roles = [
  'Web Developer',
  'Mobile Developer',
];

// Flat list used for the scrolling tech marquee in Hero.
export const techStack = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MSSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', solid: true },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', solid: true },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', solid: true },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

// Grouped by category for the "Tech Stack" card in Dashboard.
export const techStackByCategory = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Vite', 'Flutter', 'Dart'],
  Backend: ['Node.js', 'PHP', 'MySQL', 'MSSQL', 'Java'],
  'Tools & Frameworks': ['GitHub', 'Vercel', 'Firebase', 'Figma'],
};

export const aboutText = [
  "3rd year BS Information Technology student at Bulacan State University, majoring in Web and Mobile Application Development, with a primary focus on web development.",
  "Built and shipped real projects — from backend work on a group student enrollment system (PHP/MySQL) to a solo frontend e-commerce storefront (React + TypeScript) — all live and on GitHub. Driven by problem-solving and a genuine curiosity about how things work.",
];

// Newest first — order here is the order it renders in the timeline.
export const experience = [
  { title: 'BS Information Technology — 3rd Year', org: 'Bulacan State University', date: '2024 – Present', active: true },
  { title: 'Agentblazer Champion Workshop', org: 'Salesforce · SmartBridge', date: '2025' },
  { title: 'Programming Foundations', org: 'Self-learning, coursework, and personal projects', date: '2024' },
  { title: 'Division RoboCom Winner', org: 'Senior High School — SY 2023-2024', date: '2024' },
  { title: '"Hello World" — First Line of Code', org: 'Sparked my curiosity in programming', date: 'Dec 2023' },
];

// image should point to a file in /public (e.g. '/my-new-project.png').
export const projects = [
  {
    title: 'ShopNest',
    desc: 'Solo Frontend Developer — Personal Project (2026). Built a frontend e-commerce storefront demo from scratch with product browsing, filtering, cart, wishlist, and a multi-step checkout flow. Structured with React 19, TypeScript, Vite, and React Router for maintainability; tested with Vitest and React Testing Library.',
    link: 'https://shop-nest-ten-rho.vercel.app/',
    github: 'https://github.com/Dice0127/ShopNest',
    image: '/shopnest-screenshot.png',
  },
  {
    title: 'Alab eBulSU Enrollment System',
    desc: 'Backend Developer, Group Project (2025) — Bulacan State University. Developed backend logic and database schema for a student enrollment system, enabling staff to manage student records and enrollment status in one workflow. Built the enrollment workflow end-to-end and collaborated with a team to deliver a fully working system.',
    link: 'https://alab-ebulsu.free.nf/',
    github: 'https://github.com/Dice0127/alab-ebulsu-enrollment-system-php',
    image: '/alab-ebulsu-screenshot.png',
  },
];

// image should point to a file in /public (e.g. '/my-new-cert.png').
export const certifications = [
  {
    title: 'HTML5 & CSS3 Complete Course: Build Websites like a Pro',
    issuer: 'Udemy',
    date: 'Jan 2026',
    image: '/Udemy.png',
  },
  {
    title: 'Agentblazer Champion Workshop',
    issuer: 'Salesforce · SmartBridge',
    date: 'Sep 2025',
    image: '/AGENTBLAZER CHAMPION WORKSHOP.png',
  },
];

export const beyondCoding =
  "Outside of coursework, I game to unwind and stay sharp with strategy and problem-solving, " +
  "keep a consistent gym routine for discipline and physical health, and run Just Clips — a content " +
  "clipping and video editing side project producing short-form clips for social media campaigns.";
