import { Github, Linkedin, Twitter } from 'lucide-react';

export const about = {
  name: 'Alex Doe',
  title: 'Full Stack Developer',
  introduction: "I'm a passionate developer with a love for building innovative and user-friendly web applications. I specialize in the Next.js ecosystem and enjoy tackling complex problems to create seamless digital experiences.",
};

export const skills = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'Node.js' },
  { name: 'PostgreSQL' },
  { name: 'Tailwind CSS' },
  { name: 'Docker' },
  { name: 'Go' },
];

export const experience = [
  {
    role: 'Senior Developer',
    company: 'Tech Solutions Inc.',
    period: '2020 - Present',
    description: 'Led the development of several high-traffic web applications, mentored junior developers, and improved our CI/CD pipeline.'
  },
  {
    role: 'Web Developer',
    company: 'Digital Creations LLC',
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
