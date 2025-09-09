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

// Create a Fuse instance that only searches titles and categories
const fuseOptions = {
  keys: [
    { 
      name: 'title', 
      weight: 5,
      // Very permissive matching for titles to catch partial matches
      threshold: 0.6
    },
    { name: 'category', weight: 1 }
  ],
  // Permissive threshold to catch more matches
  threshold: 0.6,
  includeScore: true,
  useExtendedSearch: false,
  // Ignore location to match anywhere in title
  ignoreLocation: true,
  // Find all possible matches
  findAllMatches: true
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

  // Simple normalization for search terms
  const normalizeSearchTerms = (searchQuery: string): string => {
    // Just return the query as is - we'll handle direct title matching separately
    return searchQuery.trim().toLowerCase();
  };
  
  // Function to directly find posts with titles containing the query
  const findPostsWithTitleMatch = (searchQuery: string): BlogPost[] => {
    const lowerQuery = searchQuery.trim().toLowerCase();
    
    // Return all posts where the title contains the query string
    return searchablePosts.filter(post => 
      post.title.toLowerCase().includes(lowerQuery)
    );
  };

  // Perform search when query changes
  useEffect(() => {
    if (query) {
      // First, try to find direct title matches
      const directTitleMatches = findPostsWithTitleMatch(query);
      
      // If we found direct title matches, use those
      if (directTitleMatches.length > 0) {
        // Convert to FuseResult format
        const directResults = directTitleMatches.map(post => ({
          item: post,
          refIndex: 0, // Not important for our use
          score: 0 // Perfect score
        }));
        setSearchResults(directResults);
        return;
      }
      
      // If no direct title matches, fall back to fuzzy search
      const normalizedQuery = normalizeSearchTerms(query);
      const results = fuse.search(normalizedQuery);
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
