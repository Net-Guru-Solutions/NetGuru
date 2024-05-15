import { sortBlogs } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

const HomeCoverSection = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs);

    return (
        <BentoGrid className="py-12">
            {sortedBlogs.map((blog, index) => (
                <BentoGridItem
                    key={index}
                    header={
                        <Image
                            src={blog.image.filePath.replace("../public", "")}
                            placeholder='blur'
                            blurDataURL={blog.image.blurhashDataUrl}
                            alt={blog.title}
                            fill
                            className='w-full h-full object-center object-cover rounded-3xl'
                            sizes='100vw'
                            priority
                        />
                    }
                    title={
                        <Link href={blog.url}>
                            <a className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400">
                                {blog.title}
                            </a>
                        </Link>
                    }
                    description={blog.description}
                    className="hover:bg-gradient-to-r from-accent to-accentDark transition duration-200"
                />
            ))}
        </BentoGrid>
    );
};

export default HomeCoverSection;
