import PostContent from '../../../components/PostContent';

interface PageParams {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: PageParams) {
  return <PostContent slug={params.slug} />;
} 