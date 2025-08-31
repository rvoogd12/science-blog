/**
 * Fetches markdown content from a file
 * @param slug The slug of the blog post
 * @returns The markdown content as a string
 */
export async function getMarkdownContent(slug: string): Promise<string> {
  try {
    const response = await fetch(`/content/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Failed to fetch markdown content for ${slug}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error fetching markdown content:', error);
    return '# Content Not Found\n\nThe requested content could not be loaded.';
  }
} 