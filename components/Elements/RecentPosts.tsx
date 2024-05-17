// components/Elements/RecentPosts.jsx
import React from 'react';
import Link from 'next/link';
import { Blog } from '@/types';

const RecentPosts = ({ blogs }: {blogs: Blog[]}) => {
  return (
    <section>
      <h2>Recent Posts</h2>
      <div>
        {blogs.slice(0, 5).map((blog) => (
          <div key={blog._id}>
            <h3>
              <Link href={`/blog/${blog._raw.flattenedPath}`}>
              {blog.title}
              </Link> 
            </h3>
            <img src={blog.image.filePath} alt={blog.title} />
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
