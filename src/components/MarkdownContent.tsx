'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  slug: string;
}

export default function MarkdownContent({ slug }: MarkdownContentProps) {
  const [content, setContent] = useState<string>('Loading content...');

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await fetch(`/content/${slug}.md`);
        if (!response.ok) {
          throw new Error(`Failed to fetch markdown content for ${slug}`);
        }
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error fetching markdown content:', error);
        setContent('# Content Not Found\n\nThe requested content could not be loaded.');
      }
    }

    fetchContent();
  }, [slug]);

  return (
    <div className="text-gray-900">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className="text-3xl font-bold mb-4 text-gray-900">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-semibold mb-2 mt-4 text-gray-900">{children}</h3>,
          p: ({ children }) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
          ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
          li: ({ children }) => <li className="text-gray-700">{children}</li>,
          strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
          em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
          code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-800">{children}</code>,
          pre: ({ children }) => <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">{children}</pre>,
          blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-600">{children}</blockquote>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
} 