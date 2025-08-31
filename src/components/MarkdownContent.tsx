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
    <div className="prose prose-gray max-w-none text-gray-900">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mb-4">{children}</h1>,
          h2: ({children}) => <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">{children}</h2>,
          h3: ({children}) => <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">{children}</h3>,
          p: ({children}) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
          ul: ({children}) => <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">{children}</ul>,
          ol: ({children}) => <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-2">{children}</ol>,
          li: ({children}) => <li className="text-gray-700">{children}</li>,
          strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
          em: ({children}) => <em className="italic text-gray-700">{children}</em>,
          blockquote: ({children}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">{children}</blockquote>,
          code: ({children}) => <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
} 