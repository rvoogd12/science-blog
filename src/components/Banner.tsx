'use client';

import React, { FormEvent } from 'react';
import Link from 'next/link';
import { useSearch } from './SearchHandler';

const Banner: React.FC = () => {
  const { handleSearch } = useSearch();
  
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleSearch(e);
  };
  
  return (
    <div className="w-full">
      <div className="text-white py-6 px-4 relative z-10" style={{ 
        background: 'linear-gradient(30deg, #3d5c47 0%, #4f7c5d 100%)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
      }}>
        <h1 className="text-3xl font-bold text-center">Something Called Science</h1>
      </div>
      <nav className="bg-gray-100 relative z-0" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <ul className="flex justify-center space-x-8 py-4">
          <li>
            <Link href="/chemistry" className="text-lg text-blue-600 transition-colors hover:text-blue-800">
              Chemistry
            </Link>
          </li>
          <li>
            <Link href="/physics" className="text-lg text-blue-600 transition-colors hover:text-blue-800">
              Physics
            </Link>
          </li>
          <li>
            <Link href="/math" className="text-lg text-blue-600 transition-colors hover:text-blue-800">
              Math
            </Link>
          </li>
        </ul>
      </nav>
      <div className="w-full bg-gray-100" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div className="flex justify-center items-center py-4">
          <form onSubmit={onSubmit} className="relative w-64">
            <input
              type="text"
              name="q"
              placeholder="Search"
              className="w-full px-4 py-1 rounded-full border border-gray-300 text-gray-900 focus:outline-none focus:ring-1 focus:ring-forest-600/50 focus:border-forest-600 placeholder-gray-500"
              aria-label="Search"
            />
            <button 
              type="submit" 
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              aria-label="Submit search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;