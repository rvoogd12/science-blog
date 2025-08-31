import Link from 'next/link';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Post Coming Soon</h1>
        <p className="text-gray-600 mb-6">
          This post is currently being updated. Please check back later.
        </p>
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          ← Back to home
        </Link>
      </div>
    </div>
  );
} 