import PostContent from '../../../components/PostContent';

export default function BlogPost({ params }: any) {
  return <PostContent slug={params.slug} />;
} 