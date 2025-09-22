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
  },
  {
    id: '3',
    title: 'Naming Monatomic Ions',
    category: 'chemistry',
    excerpt: 'Learn the specific rules for naming monatomic ions, including how to determine if an ion is a cation or an anion and the naming conventions for monatomic cations and anions.',
    content: 'Naming monatomic ions is a fundamental skill in chemistry, as it helps identify the chemical properties of elements and compounds...',
    imageUrl: '/images/naming-monatomic-ions.jpg',
    slug: 'naming-monatomic-ions',
    videoId: 'S_bSweRgE34'
  },
  {
    id: '4',
    title: 'Naming Polyatomic Ions',
    category: 'chemistry',
    excerpt: 'Learn the specific rules for naming polyatomic ions, including how to determine if an ion is a cation or an anion and the naming conventions for polyatomic cations and anions.',
    content: 'Naming polyatomic ions is a fundamental skill in chemistry, as it helps identify the chemical properties of elements and compounds...',
    imageUrl: '/images/naming-polyatomic-ions.jpg',
    slug: 'naming-polyatomic-ions',
    videoId: 'oAo3NpXb0GM'
  }
];