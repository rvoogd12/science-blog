'use client';

import { useState } from 'react';

interface WorksheetCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export default function WorksheetCard({ id, title, description, imageUrl, href }: WorksheetCardProps) {
  const [imgSrc, setImgSrc] = useState(imageUrl);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create the download link for the PDF
    const pdfUrl = `/worksheets/${id}.pdf`;
    
    // Open the PDF in a new tab - this is more reliable than forcing a download
    window.open(pdfUrl, '_blank');
    
    // Reset downloading state after a short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200">
        {imgSrc ? (
          <img 
            src={imgSrc} 
            alt={title} 
            className="w-full h-full object-cover"
            onError={() => setImgSrc('/images/placeholder.jpg')} 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-500">Worksheet Preview</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className={`inline-block ${
            isDownloading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700 cursor-pointer'
          } text-white font-medium py-2 px-4 rounded transition-colors`}
        >
          {isDownloading ? 'Downloading...' : 'Download Worksheet'}
        </button>
      </div>
    </div>
  );
}
