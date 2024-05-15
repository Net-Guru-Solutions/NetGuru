import HomeCoverSection from "@/components/Elements/HomeCoverSection";
import FeaturedPosts from "@/components/Elements/FeaturedPosts";
import RecentPosts from "@/components/Elements/RecentPosts";
import { title } from "@/components/primitives";
import { allBlogs } from "contentlayer/generated";

export default function BlogPage() {
	return (
		<div>
			<h1 className={title()}>Blog</h1>
			<HomeCoverSection blogs={allBlogs} />
			<FeaturedPosts blogs={allBlogs} />
			<RecentPosts blogs={allBlogs} />
		</div>
	);
}
