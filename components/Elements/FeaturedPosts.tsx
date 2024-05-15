// components/FeaturedPosts.tsx
import { sortBlogs } from "@/lib/utils";
import React from "react";
import BlogLayoutOne from "@/components/BlogLayoutOne";
import BlogLayoutTwo from "@/components/BlogLayoutTwo";
import { Blog } from "@/types";

interface FeaturedPostsProps {
    blogs: Blog[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ blogs }) => {
    const sortedBlogs = sortBlogs({ blogs });

    if (!sortedBlogs.length) {
        return <div>No featured posts available</div>;
    }

    return (
        <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
            <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">Featured Posts</h2>

            <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16">
                {sortedBlogs.length > 1 && (
                    <article className="col-span-2 sxl:col-span-1 row-span-2 relative">
                        <BlogLayoutOne blog={sortedBlogs[1]} />
                    </article>
                )}
                {sortedBlogs.length > 2 && (
                    <article className="col-span-2 sm:col-span-1 row-span-1 relative">
                        <BlogLayoutTwo blog={sortedBlogs[2]} />
                    </article>
                )}
                {sortedBlogs.length > 3 && (
                    <article className="col-span-2 sm:col-span-1 row-span-1 relative">
                        <BlogLayoutTwo blog={sortedBlogs[3]} />
                    </article>
                )}
            </div>
        </section>
    );
};

export default FeaturedPosts;
