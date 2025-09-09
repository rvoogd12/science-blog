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

// Create a Fuse instance with stricter matching for titles
const fuseOptions = {
  keys: [
    { 
      name: 'title', 
      weight: 3,
      // Stricter matching for titles
      getFn: (obj) => obj.title,
      threshold: 0.2
    },
    { name: 'excerpt', weight: 1 },
    { name: 'content', weight: 0.5 },
    { name: 'category', weight: 1.5 }
  ],
  // More strict overall threshold
  threshold: 0.3,
  includeScore: true,
  useExtendedSearch: true,
  // Don't ignore location for more precise matching
  ignoreLocation: false,
  location: 0,
  distance: 50,
  // Enable stemming to handle plural forms
  findAllMatches: true,
  // Minimum length for fuzzy matching
  minMatchCharLength: 2
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

  // Enhanced function to handle exact matches and plural/singular forms
  const normalizeSearchTerms = (searchQuery: string): string => {
    // If query is very short (1-2 chars), use exact matching only
    if (searchQuery.length <= 2) {
      return `'${searchQuery}`;  // Exact match with Fuse.js syntax
    }
    
    // Check if the query might be a title match
    const potentialTitleMatch = searchablePosts.find(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    // If it's a potential title match, prioritize exact matching
    if (potentialTitleMatch) {
      return `=${searchQuery}`; // Exact match with higher priority
    }
    
    // For longer queries, split into words
    const words = searchQuery.split(/\s+/);
    
    // Process each word to handle plurals and exact matches
    const normalizedWords = words.map(word => {
      // Skip short words for plural handling
      if (word.length <= 3) return word;
      
      // For words ending with 's', also include the singular form
      if (word.endsWith('s') && word.length > 3) {
        return `(${word}|${word.slice(0, -1)})`;
      }
      // For singular words, also include potential plural form
      else if (word.length > 2) {
        return `(${word}|${word}s)`;
      }
      return word;
    });
    
    return normalizedWords.join(' ');
  };

  // Helper to check if a post title contains the exact query
  const titleContainsExactQuery = (post: BlogPost, queryText: string): boolean => {
    return post.title.toLowerCase().includes(queryText.toLowerCase());
  };
  
  // Perform search when query changes
  useEffect(() => {
    if (query) {
      // Use normalized search terms to handle plural/singular forms
      const normalizedQuery = normalizeSearchTerms(query);
      let results = fuse.search(normalizedQuery);
      
      // Post-process results to boost exact title matches
      if (results.length > 1) {
        // Sort results to prioritize exact title matches
        results = results.sort((a, b) => {
          const aHasExactTitle = titleContainsExactQuery(a.item, query);
          const bHasExactTitle = titleContainsExactQuery(b.item, query);
          
          if (aHasExactTitle && !bHasExactTitle) return -1;
          if (!aHasExactTitle && bHasExactTitle) return 1;
          
          // If both or neither have exact title matches, use the original score
          return (a.score || 1) - (b.score || 1);
        });
      }
      
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
