export interface BlogPost {
    id: string;
    title: string;
    category: 'chemistry' | 'physics' | 'math';
    excerpt: string;
    content: string;
    imageUrl: string;
    slug: string;
    videoId?: string; // Optional YouTube video ID
  }