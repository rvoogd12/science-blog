import { BlogPost } from '../types/BlogPost';

export type { BlogPost };

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Anions and Cations',
    category: 'chemistry',
    excerpt: 'Learn about anions and cations, the charged particles that form through electron transfer and are fundamental to understanding chemical bonding.',
    content: 'Anions and cations are ions that have gained or lost electrons, resulting in a negative or positive charge...',
    imageUrl: '/images/anions-and-cations.jpg',
    slug: 'anions-and-cations',
    videoId: 'dQw4w9WgXcQ' // Example YouTube video ID
  },
  {
    id: '2',
    title: 'Understanding Quantum Mechanics',
    category: 'physics',
    excerpt: 'Explore the fascinating world of quantum mechanics and how it describes the behavior of matter and energy at the atomic scale.',
    content: 'Quantum mechanics is a fundamental theory in physics...',
    imageUrl: '/images/quantum-mechanics.jpg',
    slug: 'understanding-quantum-mechanics',
    videoId: 'dQw4w9WgXcQ' // Example YouTube video ID
  },
  {
    id: '3',
    title: 'The Beauty of Calculus',
    category: 'math',
    excerpt: 'Discover how calculus helps us understand change and motion in the world around us.',
    content: 'Calculus is the mathematical study of continuous change...',
    imageUrl: '/images/calculus.jpg',
    slug: 'the-beauty-of-calculus',
    videoId: 'dQw4w9WgXcQ' // Example YouTube video ID
  }
];