// components/PostList.tsx
import React from 'react';
import BlogPost from './blogpost';

interface Post {
  id: number;
  title: string;
  excerpt?: string;
  content: string; // Add content here
  slug: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
