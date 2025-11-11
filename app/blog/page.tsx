import type { Metadata } from "next";
import { getPosts } from "@/app/actions/post";
import Image from "next/image";
import BlogDescription from "@/components/BlogDescription";
import { PostType } from "../types";

export const metadata: Metadata = {
	title: "all blog page",
	description: "blog page description",
};

const BlogPage = async () => {
	const posts = await getPosts();
	return (
		<main className="bg-bodyColor ">
			<div className="max-w-[1234px]  mx-auto lg:px-0  px-[44px] pt-[48px] pb-[119px] lg:pt-[84px]  lg:pb-[144.32px] ">
				<div className="text-center font-bold font-raleway text-gray666 text-[11.43px] uppercase tracking-widest desktop:text-base">
					our blogs
				</div>

				<div className="text-center   font-raleway font-bold text-[24px] lg:leading-[45.7px] leading-[32.8px] lg:text-[40px] desktop:leading-[45px] my-[27px]  lg:max-w-[500px] mx-auto">
					Find our all blogs from here
				</div>
				<div className="text-center lg:mx-16 font-roboto text-gray666 text-[11.49px] desktop:text-base  mb-[21px]">
					our blogs are written from very research research and well known
					writers writers so that we can provide you the best blogs and articles
					articles for you to read them all along
				</div>
				<div className="grid lg:grid-cols-3 gap-x-[13px] gap-y-10">
					{posts.map((post:PostType, i:number) => (
						<div key={i} className="space-y-[28.72px] lg:space-y-10 ">
							{post.img && (
								<Image
									src={post.img}
									alt={post.title}
									width={400}
									height={360}
									className="min-h-[360px] object-cover rounded"
								/>
							)}
							<BlogDescription key={i} post={post} />
						</div>
					))}
				</div>
			</div>
		</main>
	);
};

export default BlogPage;
