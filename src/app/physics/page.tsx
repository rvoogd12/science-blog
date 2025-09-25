import Banner from '../../components/Banner';
import BlogPostCard from '../../components/BlogPostCard';
import { blogPosts } from '../../data/blogPosts';

export default function Physics() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
