import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../../../data/blogPosts';
import Banner from '../../../components/Banner';
import MarkdownContent from '../../../components/MarkdownContent';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Banner />
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">{post.title}</h1>
        
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