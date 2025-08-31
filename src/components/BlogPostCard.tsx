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
      <div className="bg-white rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl">
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