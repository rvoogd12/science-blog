import React from 'react';
import Link from 'next/link';

const Banner: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-blue-600 text-white py-6 px-4">
        <h1 className="text-3xl font-bold text-center">Science Blog</h1>
      </div>
      <nav className="bg-gray-100 shadow-md">
        <ul className="flex justify-center space-x-8 py-4">
          <li>
            <Link href="/chemistry" className="text-lg hover:text-blue-600 transition-colors">
              Chemistry
            </Link>
          </li>
          <li>
            <Link href="/physics" className="text-lg hover:text-blue-600 transition-colors">
              Physics
            </Link>
          </li>
          <li>
            <Link href="/math" className="text-lg hover:text-blue-600 transition-colors">
              Math
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Banner;