import { BlogPost } from '../types/BlogPost';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Introduction to Chemical Bonds',
    category: 'chemistry',
    excerpt: 'Learn about the fundamental concepts of chemical bonding and how atoms join together to form molecules.',
    content: 'Chemical bonding is one of the most important concepts in chemistry...',
    imageUrl: '/images/chemical-bonds.jpg',
    slug: 'introduction-to-chemical-bonds'
  },
  {
    id: '2',
    title: 'Understanding Quantum Mechanics',
    category: 'physics',
    excerpt: 'Explore the fascinating world of quantum mechanics and how it describes the behavior of matter and energy at the atomic scale.',
    content: 'Quantum mechanics is a fundamental theory in physics...',
    imageUrl: '/images/quantum-mechanics.jpg',
    slug: 'understanding-quantum-mechanics'
  },
  {
    id: '3',
    title: 'The Beauty of Calculus',
    category: 'math',
    excerpt: 'Discover how calculus helps us understand change and motion in the world around us.',
    content: 'Calculus is the mathematical study of continuous change...',
    imageUrl: '/images/calculus.jpg',
    slug: 'the-beauty-of-calculus'
  }
];