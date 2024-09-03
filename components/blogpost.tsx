// components/BlogPost.tsx
import React from 'react';

interface Post {
  id: number;
  title: string;
  excerpt?: string;
  content: string; // Ensure content is here
  slug: string;
}

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p> {/* Use content here */}
    </div>
  );
};

export default BlogPost;
