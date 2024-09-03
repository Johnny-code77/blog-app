import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Post {
  id: number;
  title: string;
  content: string;
  slug: string;
}

interface PostProps {
  post: Post;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const BlogPost = ({ post }: PostProps) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { slug: 'fb' } },
    { params: { slug: 'another-post' } },
  ];

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostProps, Params> = async (context) => {
  const { params } = context;

  if (!params?.slug || Array.isArray(params.slug)) {
    return {
      notFound: true,
    };
  }

  const post: Post = {
    id: 1,
    title: 'Facebook Post',
    content: 'This is a post about Facebook.',
    slug: params.slug,  // Ensure this is a string
  };

  return {
    props: {
      post,
    },
  };
};
