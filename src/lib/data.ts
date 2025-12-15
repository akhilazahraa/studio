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
    role: 'Senior UI/UX Designer',
    company: 'Creative Solutions Inc.',
    period: '2020 - Present',
    description: 'Led the design of several high-traffic web applications, mentored junior designers, and improved our design system and workflow.'
  },
  {
    role: 'UI/UX Designer',
    company: 'Pixel Perfect Studios',
    period: '2018 - 2020',
    description: 'Developed and maintained client websites using modern web technologies.'
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
