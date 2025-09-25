import Banner from '../../components/Banner';
import BlogPostCard from '../../components/BlogPostCard';
import { blogPosts } from '../../data/blogPosts';

export default function Chemistry() {
  // Filter only chemistry posts
  const chemistryPosts = blogPosts.filter(post => post.category === 'chemistry');
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Chemistry Topics</h1>
        {chemistryPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chemistryPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 text-center max-w-md mx-auto">
            <p className="text-gray-700">
              Oops, it seems there aren't any posts related to this topic yet.
              <br />
              Check back later!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
