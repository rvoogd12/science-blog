import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '../../../data/blogPosts';
import Banner from '../../../components/Banner';

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

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Banner />
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        {/* YouTube Video */}
        {post.videoId && <YouTubeEmbed videoId={post.videoId} />}
        
        <div className="relative h-64 w-full mb-6">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          
          {/* Sample content - will be replaced by actual content */}
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              {post.content}
            </p>
            <p className="mb-4">
              This is a placeholder paragraph. You can replace this with your actual content when you edit the post.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-4">Additional Information</h2>
            <p className="mb-4">
              You can add more sections, images, and formatting as needed. The YouTube video 
              at the top can be customized by changing the videoId in the blog post data.
            </p>
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