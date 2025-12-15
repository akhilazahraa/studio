import { Github, Linkedin, Twitter } from 'lucide-react';

export const about = {
  name: 'Akhila Zahra',
  title: 'UI/UX Designer',
  introduction: "I'm a passionate UI/UX Designer with a love for creating intuitive, beautiful, and user-centered digital experiences. I specialize in the design process from concept to final polish, using a variety of tools to bring ideas to life.",
};

export const skills = [
  { name: 'Adobe Illustrator' },
  { name: 'Adobe Photoshop' },
  { name: 'Figma' },
  { name: 'Canva' },
  { name: 'Jira' },
  { name: 'After Effects' },
  { name: 'Premiere Pro' },
];

export const experience = [
  {
    role: 'UI/UX Designer (Internship)',
    company: 'Dinas Komunikasi dan Informatika Jawa Tengah',
    period: 'Jan 2024 - Jan 2024',
    description: 'Designed user-centered interfaces for the e-Fasilitasi web application, focusing on usability and visual consistency. I conducted user flow mapping, wireframing, and high-fidelity prototyping, collaborating with developers on implementation.'
  },
  {
    role: 'Graphic Design (Internship)',
    company: 'Dinas Lingkungan Hidup Kota Semarang',
    period: 'Jan 2021 - Jan 2021',
    description: 'Designed layouts for Temporary Waste Disposal Sites, produced operational maps, compiled waste collection records, and created a corporate video highlighting employee activities.'
  }
];

export const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a custom CMS, payment gateway integration, and a recommendation engine. Built with Next.js, TypeScript, and PostgreSQL.',
    image: 'project-1',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative project management tool that helps teams organize tasks, track progress, and communicate effectively. Features real-time updates using WebSockets.',
    image: 'project-2',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Personal Blog',
    description: 'A statically generated blog using Next.js and MDX. Features a clean design, dark mode, and fast performance. Deployed on Vercel.',
    image: 'project-3',
    githubUrl: '#',
    liveUrl: '#',
  },
];

export const contact = {
  email: 'hello@nextfolio.com',
  socials: [
    { name: 'GitHub', url: '#', icon: Github },
    { name: 'LinkedIn', url: '#', icon: Linkedin },
    { name: 'Twitter', url: '#', icon: Twitter },
  ],
};

export const navigationLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI Assistant', href: '#ai-assistant' },
  { name: 'Contact', href: '#contact' },
];

export const fullAboutMe = `${about.introduction} 

My core skills include: ${skills.map(s => s.name).join(', ')}.

My experience includes:
${experience.map(e => `- ${e.role} at ${e.company}: ${e.description}`).join('\n')}
`;
