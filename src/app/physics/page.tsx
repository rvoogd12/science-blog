import Banner from '../../components/Banner';
import BlogPostCard from '../../components/BlogPostCard';
import { blogPosts } from '../../data/blogPosts';

export default function Physics() {
  // Filter only physics posts
  const physicsPosts = blogPosts.filter(post => post.category === 'physics');
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Physics Topics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {physicsPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
