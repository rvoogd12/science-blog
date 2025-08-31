import PostContent from '../../../components/PostContent';

interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: PageParams) {
  const { slug } = await params;
  return <PostContent slug={slug} />;
} 