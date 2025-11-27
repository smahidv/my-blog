import { getPost } from "@/app/actions/post";
import { NotFound } from "@/components/NotFound";
import Image from "next/image";





async function getData(slug) {
	const res = await getPost(slug);
	return res;
}

// Generate dynamic metadata (SEO)
export const generateMetadata = async ({ params }) => {
	const { slug } = await params;
	const post = await getData(slug);
	return {
		title: post?.title ?? "Error",
		description: post?.desc ?? "Page not found",
	};
};

const SinglePostPage = async ({ params }) => {
	const { slug } =  params;
	const post = await getData(slug);
	if (!post) {
		return <NotFound />;
	}
	return (
		<main className="bg-bodyColor ">
			{post && (
				<div className="max-w-[1234px]  mx-auto   px-[44px] pt-[48px] pb-[119px] lg:pt-[84px]  lg:pb-[144.32px]  lg:px-[106px]">
					<div className="lg:mx-16 flex font-roboto text-[8.62px]  desktop:text-xs mb-[18px] gap-[5.74px] desktop:gap-2.5">
						<div className="font-bold uppercase">{post.category}</div>
						<div className="font-medium text-gray999">
							{post &&
								new Date(post.createdAt).toLocaleDateString("en-GB", {
									day: "2-digit",
									month: "long",
									year: "2-digit",
								})}
						</div>
					</div>
					<div className="lg:mx-16 font-raleway font-bold text-[24px] lg:leading-[45.7px] leading-[32.8px] lg:text-[40px] desktop:leading-[45px] mb-[27px]  lg:max-w-[964px]">
						{post.title}
					</div>
					<Image
						src={post.img}
						alt={post && post.title}
						className="rounded-[5.65px] mb-[60px] max-h-[576px] "
						width={1232}
						height={608}
					/>
					<div
						className="lg:mx-16 font-roboto text-gray666 text-[11.49px] desktop:text-base  mb-[21px]"
						dangerouslySetInnerHTML={{ __html: post.desc }}
					></div>
				</div>
			)}
		</main>
	);
};

export default SinglePostPage;
