'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { blogPosts } from '../data/blogPosts';
import { BlogPost } from '../types/BlogPost';

// Use blog posts directly for searching
const searchablePosts = blogPosts;

// Define our own result type since we're not using Fuse.js anymore
interface SearchResult {
  item: BlogPost;
  score: number;
}

export function useSearch() {
  const router = useRouter();
  // Safely access searchParams - might be null during server rendering
  const searchParams = useSearchParams();
  const query = searchParams ? searchParams.get('q') || '' : '';
  const [searchResults, setSearchResults] = useState<Array<SearchResult>>([]);

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

  // We don't need this function anymore, removing it
  
  // Function to directly find posts with titles containing the query
  const findPostsWithTitleMatch = (searchQuery: string): BlogPost[] => {
    const lowerQuery = searchQuery.trim().toLowerCase();
    
    // Return all posts where the title contains the query string
    return searchablePosts.filter(post => 
      post.title.toLowerCase().includes(lowerQuery)
    );
  };

  // Function to find posts with category matching the query
  const findPostsWithCategoryMatch = (searchQuery: string): BlogPost[] => {
    const lowerQuery = searchQuery.trim().toLowerCase();
    
    // Return all posts where the category contains the query string
    return searchablePosts.filter(post => 
      post.category.toLowerCase().includes(lowerQuery)
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
          refIndex: 0,
          score: 0 // Perfect score
        }));
        setSearchResults(directResults);
        return;
      }
      
      // If no title matches, try category matches
      const categoryMatches = findPostsWithCategoryMatch(query);
      if (categoryMatches.length > 0) {
        // Convert to FuseResult format
        const categoryResults = categoryMatches.map(post => ({
          item: post,
          refIndex: 0,
          score: 0.5 // Good but not perfect score
        }));
        setSearchResults(categoryResults);
        return;
      }
      
      // If no direct matches at all, return empty results
      // No more fuzzy fallback
      setSearchResults([]);
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
