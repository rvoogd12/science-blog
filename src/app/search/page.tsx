'use client';

import { useEffect } from 'react';
import Banner from '../../components/Banner';
import BlogPostCard from '../../components/BlogPostCard';
import { useSearch } from '../../components/SearchHandler';
import Link from 'next/link';

export default function SearchPage() {
  const { query, searchResults } = useSearch();

  // Set page title based on search query
  useEffect(() => {
    document.title = query ? `Search: ${query} - Something Called Science` : 'Search - Something Called Science';
  }, [query]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          {query ? `Search Results for "${query}"` : 'Search'}
        </h1>
        
        {query && searchResults.length === 0 && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700">No results found for "{query}".</p>
            <p className="text-gray-600 mt-2">Try different keywords or check your spelling.</p>
            <Link href="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              ← Back to home
            </Link>
          </div>
        )}

        {searchResults.length > 0 && (
          <>
            <p className="text-gray-600 mb-6">Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map(result => (
                <BlogPostCard key={result.item.id} post={result.item} />
              ))}
            </div>
          </>
        )}
        
        {!query && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700">Enter a search term in the search bar above.</p>
          </div>
        )}
      </div>
    </main>
  );
}
