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
    <ReactMarkdown 
      remarkPlugins={[remarkGfm]} 
      className="prose prose-slate max-w-none"
    >
      {content}
    </ReactMarkdown>
  );
} 