'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, BlogPost } from '../data/blogPosts';
import Banner from './Banner';
import MarkdownContent from './MarkdownContent';

interface PostContentProps {
  slug: string;
}

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  return (
    <div className="aspect-w-16 aspect-h-9 w-full mb-6">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-[400px]"
      ></iframe>
    </div>
  );
};

export default function PostContent({ slug }: PostContentProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundPost = blogPosts.find(post => post.slug === slug);
    setPost(foundPost || null);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Banner />
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-center text-gray-700">Loading...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Banner />
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">{post.title}</h1>
        
        {/* YouTube Video */}
        {post.videoId && <YouTubeEmbed videoId={post.videoId} />}
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          
          <div className="prose max-w-none">
            <MarkdownContent slug={post.slug} />
          </div>
        </div>
        
        <div className="mt-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to home
          </Link>
        </div>
      </article>
    </main>
  );
} 