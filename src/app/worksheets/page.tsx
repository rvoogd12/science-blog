import Banner from '../../components/Banner';
import BlogPostCard from '../../components/BlogPostCard';
import WorksheetCard from '../../components/WorksheetCard';
import { blogPosts } from '../../data/blogPosts';

export default function Worksheets() {
  // Filter only worksheet posts if you have any
  const worksheetPosts = blogPosts.filter(post => post.category === 'worksheet');
  
  // Find related blog posts for worksheets
  const findRelatedBlogPost = (topicId: string) => {
    // First try to find an exact match
    const exactMatch = blogPosts.find(post => post.slug === topicId);
    if (exactMatch) return exactMatch;
    
    // If no exact match, look for a partial match
    return blogPosts.find(post => post.slug.includes(topicId));
  };
  
  // Define available worksheets with images from related blog posts
  const availableWorksheets = [
    {
      id: 'polyatomic-ions',
      title: 'Polyatomic Ions: What They Are, Naming Rules and Examples (Anions, Cations, and PDF Quiz Worksheet)',
      description: 'Practice identifying and naming polyatomic ions with this comprehensive worksheet.',
      imageUrl: findRelatedBlogPost('polyatomic-ions')?.imageUrl || '/images/placeholder.jpg',
      href: '/worksheets/polyatomic-ions'
    },
    {
      id: 'list-of-common-polyatomic-ions',
      title: 'Common Polyatomic Ions List in Chemistry: Names, Charges, and Everyday Applications',
      description: 'Master the most common polyatomic ions with this comprehensive list and practice worksheet.',
      imageUrl: findRelatedBlogPost('list-of-common-polyatomic-ions')?.imageUrl || '/images/placeholder.jpg',
      href: '/worksheets/list-of-common-polyatomic-ions'
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
            <WorksheetCard
              key={worksheet.id}
              id={worksheet.id}
              title={worksheet.title}
              description={worksheet.description}
              imageUrl={worksheet.imageUrl}
              href={worksheet.href}
            />
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