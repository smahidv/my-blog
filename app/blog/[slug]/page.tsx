import { NotFound } from "@/components/NotFound";
import { getPost } from "../../actions/post";

interface MyParams {
	slug: string;
}

export const generateMetadata = async ({ slug }: MyParams) => {
	const post = await getPost(slug);
	return {
		title: post?.title ?? "Error",
		description: post?.desc ?? "Page not found",
	};
};

const SinglePostPage = async ({ slug }: MyParams) => {
	const post = await getPost(slug);
	if (!post) {
		return <NotFound />;
	}
	return (
		<div>
			<h1>{post.title}</h1>
		</div>
	);
};

export default SinglePostPage;
