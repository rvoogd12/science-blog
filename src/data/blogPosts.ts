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
    videoId: 'Gfwq7MCd9VE'
  },
  {
    id: '2',
    title: 'Monatomic and Polyatomic Ions',
    category: 'chemistry',
    excerpt: 'Discover the difference between monatomic ions (single atoms with charge) and polyatomic ions (multiple bonded atoms with charge) and their essential role in chemical reactions.',
    content: 'Monatomic and polyatomic ions are ions that have gained or lost electrons, resulting in a negative or positive charge...',
    imageUrl: '/images/monatomic-and-polyatomic-ions.jpg',
    slug: 'monatomic-and-polyatomic-ions',
    videoId: 'SbDPA5B7DG4'
  }
];