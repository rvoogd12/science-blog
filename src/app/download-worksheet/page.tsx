import Banner from '../../components/Banner';

export default function DownloadWorksheet() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Download Worksheet</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-md mx-auto">
          <p className="text-gray-700 mb-6">Example text</p>
          
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Sign up and get the <strong>free worksheet PDF!</strong>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
