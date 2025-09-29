import Banner from '../../components/Banner';
import BlogPostCard from '../../components/BlogPostCard';
import { blogPosts } from '../../data/blogPosts';
import Link from 'next/link';

export default function Worksheets() {
  // Filter only worksheet posts if you have any
  const worksheetPosts = blogPosts.filter(post => post.category === 'worksheet');
  
  // Define available worksheets
  const availableWorksheets = [
    {
      id: 'polyatomic-ions',
      title: 'Polyatomic Ions Worksheet',
      description: 'Practice identifying and naming polyatomic ions with this comprehensive worksheet.',
      imageUrl: '/images/worksheets/polyatomic-ions.jpg',
      href: '/worksheets/polyatomic-ions'
    }
  ];
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Worksheets</h1>
        
        {/* Available worksheets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {availableWorksheets.map((worksheet) => (
            <div key={worksheet.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                {worksheet.imageUrl ? (
                  <img 
                    src={worksheet.imageUrl} 
                    alt={worksheet.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder.jpg';
                    }} 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500">Worksheet Preview</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{worksheet.title}</h3>
                <p className="text-gray-700 mb-4">{worksheet.description}</p>
                <Link href={worksheet.href} className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors">
                  Get Worksheet
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Blog posts related to worksheets if any */}
        {worksheetPosts.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {worksheetPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}
        
        {/* Show message if no worksheets or posts */}
        {availableWorksheets.length === 0 && worksheetPosts.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 text-center max-w-md mx-auto">
            <p className="text-gray-700">
              Oops, it seems there aren't any worksheets available yet.
              <br />
              Check back later!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}