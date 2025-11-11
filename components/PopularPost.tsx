import Image from "next/image";
import Link from "next/link";
import BlogDescription from "@/components/BlogDescription";
import { getPopularPosts } from "@/app/actions/post";

const PopularPost = async () => {
	const posts = await getPopularPosts();
	return (
		<section>
			<div className="flex justify-between items-center mb-[37px] lg:mb-[58.24px] desktop:lg-mb-[87px] ">
						<div className="text-[20px] lg:text-[34.47px] font-bold font-raleway capitalize">
							popular post 
						</div>
						<Link
							href="/blog"
							className=" text-white font-bold font-roboto text-[10.05px] desktop:text-sm
								capitalize bg-purple py-3 px-[35px] desktop:px-12 desktop:py-4 rounded-[5.74px] "
						>
							view all
						</Link>
					</div>
			<div className="gap-y-[45px] desktop:gap-[53px] pb-[96px] lg:pb-[137.5px] desktop:pb-[259px] grid lg:grid-cols-3 lg:gap-x-[9.3px] desktop:gap-x-[15px] ">
				{posts.map((post, index) => (
					<div key={index} className="space-y-[28.72px] lg:space-y-10 ">
						{post.img && (
							<Image
								src={post.img}
								alt={post.title}
								width={712}
								height={511}
								className="rounded-[5.65px] lg:w-[511.24] desktop:w-[712px] object-cover  "
							/>
						)}
						<BlogDescription post={post} />
					</div>
				))}
			</div>
		</section>
	);
};

export default PopularPost;
