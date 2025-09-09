import React from 'react';
import Link from 'next/link';

const Banner: React.FC = () => {
  return (
    <div className="w-full">
      <div className="text-white py-6 px-4" style={{ 
        background: 'linear-gradient(30deg, #3d5c47 0%, #4f7c5d 100%)',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
      }}>
        <h1 className="text-3xl font-bold text-center">Something Called Science</h1>
      </div>
      <nav className="bg-gray-100" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
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
      <div className="w-full bg-gray-100 py-4" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}></div>
    </div>
  );
};

export default Banner;