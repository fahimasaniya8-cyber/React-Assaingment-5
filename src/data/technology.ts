import type { IconType } from 'react-icons';

import { FaReact, FaJs, FaNodeJs, FaJava, FaDocker } from 'react-icons/fa';

import {
  SiTypescript,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
} from 'react-icons/si';

export type Technology = {
  id: number;
  name: string;
  category: string;
  description: string;
  rating: number;
  difficulty: string;
  badge: string;
  icon: IconType;
};

export const technologies: Technology[] = [
  {
    id: 1,
    name: 'React',
    category: 'Frontend',
    description:
      'A declarative, component-based JavaScript library for building modern user interfaces.',
    rating: 4.9,
    difficulty: 'Beginner-Friendly',
    badge: 'Popular',
    icon: FaReact,
  },
  {
    id: 2,
    name: 'Vue.js',
    category: 'Frontend',
    description:
      'An approachable, performant, and versatile framework for building web user interfaces.',
    rating: 4.8,
    difficulty: 'Beginner-Friendly',
    badge: 'Versatile',
    icon: SiVuedotjs,
  },
  {
    id: 3,
    name: 'Svelte',
    category: 'Frontend',
    description:
      'Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.',
    rating: 4.8,
    difficulty: 'Intermediate',
    badge: 'Fast',
    icon: SiSvelte,
  },
  {
    id: 4,
    name: 'Next.js',
    category: 'Frontend',
    description:
      'The React framework for full-stack web applications with hybrid static & server rendering.',
    rating: 4.9,
    difficulty: 'Intermediate',
    badge: '', // khali rakhle badge dekhabe na
    icon: SiNextdotjs,
  },
  {
    id: 5,
    name: 'Node.js',
    category: 'Backend',
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    rating: 4.8,
    difficulty: 'Intermediate',
    badge: 'Standard',
    icon: FaNodeJs,
  },
  {
    id: 6,
    name: 'PostgreSQL',
    category: 'Database',
    description:
      'A powerful, open-source object-relational database system with proven reliability.',
    rating: 4.9,
    difficulty: 'Intermediate',
    badge: 'Top SQL',
    icon: SiPostgresql,
  },
  {
    id: 7,
    name: 'Redis',
    category: 'Database',
    description:
      'In-memory data structure store used as a high-speed database, cache, and message broker.',
    rating: 4.8,
    difficulty: 'Intermediate',
    badge: 'Cache',
    icon: SiRedis,
  },
  {
    id: 8,
    name: 'JavaScript',
    category: 'Language',
    description:
      'The versatile, ubiquitous scripting language powering dynamic behavior across the web.',
    rating: 4.9,
    difficulty: 'Beginner-Friendly',
    badge: 'Ubiquitous',
    icon: FaJs,
  },
  {
    id: 9,
    name: 'TypeScript',
    category: 'Language',
    description:
      'A strongly typed programming language that builds on JavaScript for robust tooling.',
    rating: 4.9,
    difficulty: 'Intermediate',
    badge: 'Essential',
    icon: SiTypescript,
  },

  {
    id: 10,
    name: 'Java',
    category: 'Language',
    description:
      'A secure, object-oriented programming language designed for portability and scale.',
    rating: 4.6,
    difficulty: 'Intermediate',
    badge: 'Robust',
    icon: FaJava,
  },
  {
    id: 11,
    name: 'Tailwind CSS',
    category: 'Styling',
    description:
      'A utility-first CSS framework packed with classes that can be composed to build custom UI.',
    rating: 4.9,
    difficulty: 'Beginner-Friendly',
    badge: 'Modern',
    icon: SiTailwindcss,
  },
  {
    id: 12,
    name: 'Docker',
    category: 'DevOps',
    description:
      'A platform designed to build, share, and run containerized applications reliably.',
    rating: 4.9,
    difficulty: 'Intermediate',
    badge: 'Containers',
    icon: FaDocker,
  },
];
