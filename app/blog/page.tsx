import type { Metadata } from "next";
import { getPosts } from "@/app/actions/post";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
	title: "all blog page",
	description: "blog page description",
};

const BlogPage = async () => {
	const posts = await getPosts();
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id}>{post.id}</div>
			))}
		</div>
	);
};

export default BlogPage;
