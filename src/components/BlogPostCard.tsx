import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../types/BlogPost';

export interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div 
        className="bg-white rounded-lg overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
        style={{
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="relative h-48 w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
          <p className="text-gray-600">{post.excerpt}</p>
          <div className="mt-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;