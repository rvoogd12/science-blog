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
  }
];