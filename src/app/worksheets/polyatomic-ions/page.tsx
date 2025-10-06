'use client';
import Banner from '../../../components/Banner';
import { useState } from 'react';

export default function DownloadWorksheet() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      setIsSuccess(false);
      setMessage('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    setMessage('');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name, 
          email,
          // The group ID will be handled on the server side
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      setIsSuccess(true);
      setMessage('All sent!\nIf you don\'t see our email in your Inbox within the next couple of minutes, please check your Spam or Junk folder.\nIf our email landed in your Spam or Junk folder, please mark our email as not spam/junk so you don\'t miss any of our future emails.');
      // Reset form
      setName('');
      setEmail('');
    } catch (error) {
      setIsSuccess(false);
      setMessage(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Polyatomic Ions: What They Are, Naming Rules and Examples (Anions, Cations, and PDF Quiz Worksheet)</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-md mx-auto">
          <p className="text-gray-700 mb-6">Please enter your name and email and we'll send it right over! We'll also send you our weekly-ish newsletter. You can opt out anytime.</p>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="First name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 placeholder-gray-500 text-gray-900"
                disabled={isSubmitting}
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 placeholder-gray-500 text-gray-900"
                disabled={isSubmitting}
                required
              />
            </div>
            
            <button
              type="submit"
              className={`w-full font-medium py-2 px-4 rounded transition-colors ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
              disabled={isSubmitting}
            >
              Sign up and get the <strong>free worksheet PDF!</strong>
            </button>
            
            {message && (
              <div 
                className={`mt-3 text-sm ${
                  isSuccess ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}