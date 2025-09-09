'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { blogPosts } from '../data/blogPosts';
import { BlogPost } from '../types/BlogPost';

// Add content to the search index for better results
const searchablePosts = blogPosts.map(post => ({
  ...post,
  // This would be replaced with actual content in a real implementation
  // For now, we'll just use the excerpt as a placeholder
  content: post.excerpt
}));

// Create a Fuse instance for searching
const fuseOptions = {
  keys: [
    { name: 'title', weight: 2 },
    { name: 'excerpt', weight: 1 },
    { name: 'content', weight: 0.5 },
    { name: 'category', weight: 1.5 }
  ],
  threshold: 0.4, // Lower threshold = stricter matching
  includeScore: true
};

// Initialize Fuse with searchable posts
const fuse = new Fuse(searchablePosts, fuseOptions);

export function useSearch() {
  const router = useRouter();
  // Safely access searchParams - might be null during server rendering
  const searchParams = useSearchParams();
  const query = searchParams ? searchParams.get('q') || '' : '';
  const [searchResults, setSearchResults] = useState<Array<Fuse.FuseResult<BlogPost>>>([]);

  // Handle search submission
  const handleSearch = (e: FormEvent<HTMLFormElement> | string) => {
    let searchQuery = '';
    
    if (typeof e === 'string') {
      searchQuery = e;
    } else {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      searchQuery = formData.get('q') as string || '';
    }

    if (searchQuery.trim()) {
      // Navigate to search page with the query
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Perform search when query changes
  useEffect(() => {
    if (query) {
      const results = fuse.search(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return {
    query,
    searchResults,
    handleSearch
  };
}

export default function SearchHandler({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return children;
}
