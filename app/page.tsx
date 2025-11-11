import Image from "next/image";
import Link from "next/link";
import hero from "@/public/hero.png";
import zigzagHeroBottom from "@/public/zigzagHeroBottom.png";
import zigzagHeroTop from "@/public/zigzagHeroTop.png";
import PopularPost from "@/components/PopularPost";
import { getRecentPosts } from "./actions/post";
import BlogDescription from "@/components/BlogDescription";

export default async function Home() {
	const recentsPosts = await getRecentPosts();
	return (
		<main className="pt-[10px] lg:pt-0 bg-bodyColor ">
			<Image
				src={zigzagHeroTop}
				className="hidden desktop:block absolute z-30 left-0 -top-8 "
				alt="vector"
			/>
			<section className="bg-purple relative ">
				<Image
					src={zigzagHeroBottom}
					className="hidden lg:block absolute z-0 -bottom-24 right-0 "
					alt="vector"
				/>
				<div className=" max-w-[1234px]  mx-auto px-[24px] lg:px-[34px] desktop:px-0 grid tab:grid-cols-2 gap-y-[58px] py-[41px]  lg:py-[80px] desktop:pt-[122px] desktop:pb-[98px]  lg:justify-between ">
					<div className="max-w-[300px] lg:max-w-[416.46px] desktop:max-w-[580px] text-white font-raleway ">
						<div className="font-bold text-[11.49px] desktop:text-sm tracking-widest capitalize mb-1.5 lg:mb-[26.8px] desktop:mb-[37px] ">
							Featured Post
						</div>
						<div className=" text-4xl lg:text-[45.95px] desktop:text-6xl desktop:leading-[86px] lg:leading-[61.8px] font-bold mb-5 lg:mb-[19.61px] desktop::mb-[28px] ">
							How AI will Change the Future
						</div>
						<div className="font-normal text-[11.49px] desktop:text-base mb-[26px] lg:mb-[46px] max-w-[300px] desktop:max-w-[416px]">
							The future of AI will see home robots having enhanced
							intelligence, increased capabilities, and becoming more personal
							and possibly cute. For example, home robots will overcome
							navigation, direction
						</div>
						<Link
							 href={`/blog/${recentsPosts[0].slug}`}
							className=" block w-fit bg-white py-3 px-[35px] rounded-[5.74px] text-black text-[10px] desktop:text-sm font-bold "
						>
							Read more
						</Link>
					</div>
					<Image
						src={hero}
						alt="heroImage"
						className="desktop:max-w-[608px] relative z-10  "
						placeholder="blur"
					/>
				</div>
			</section>
			<div className="max-w-[1234px]  mx-auto lg:px-[34px] desktop:px-0 px-6 ">
				<section className="relative  bg-white rounded-[11.49px]  border-grayBorder border lg:bg-bodyColor lg:border-none lg:rounded-none lg:p-0 py-5 px-[17px] mt-[42px] mb-[65px] lg:mt-[94px]  lg:mb-[144.32px] desktop:mt-[130px] desktop:mb-[200px] ">
					{recentsPosts[0].img && (
						<Image
							src={recentsPosts[0].img}
							alt={recentsPosts[0].title}
							width={1068}
							height={684}
							className=" rounded-[11.49px] desktop:rounded-[16px] w-full lg:h-[413px] desktop:h-[576px] object-cover "
						/>
					)}
					<div className="mt-[26.7px] bg-white  lg:mt-0 lg:absolute lg:top-[241.26px] lg:right-0 lg:rounded-[11.49px] max-w-[660.59px] desktop:max-w-[920px] desktop:rounded-[16px] lg:p-[23px] lg:pr-[74.67px] desktop:pr-[104px] desktop:p-8 ">
						<BlogDescription post={recentsPosts[0]} />
					</div>
				</section>
				<section>
					<div className="flex justify-between items-center mb-[37px] lg:mb-[58.24px] desktop:lg-mb-[87px] ">
						<div className="text-[20px] lg:text-[34.47px] font-bold font-raleway capitalize">
							our recent blog
						</div>
						<Link
							href="/blog"
							className=" text-white font-bold font-roboto text-[10.05px] desktop:text-sm
								capitalize bg-purple py-3 px-[35px] desktop:px-12 desktop:py-4 rounded-[5.74px] "
						>
							view all
						</Link>
					</div>
					<div className="space-y-[45px] mb-[57px] lg:mb-[75px] desktop:mb-[104px] lg:grid lg:grid-cols-3 lg:gap-x-[9.3px] desktop:gap-x-[15px] ">
						{recentsPosts.map((item, index) => (
							<div
								key={index}
								className={` space-y-[28.72px] lg:space-y-10 ${
									index === 0 &&
									"lg:col-span-4 lg:space-y-0 lg:flex lg:gap-x-[40.21px] desktop:gap-x-[56px] "
								}"`}
							>
								{item.img && (
									<Image
										src={item.img}
										alt={item.title}
										width={712}
										height={511}
										className="rounded-[5.65px] lg:w-[511.24] desktop:w-[712px]  "
									/>
								)}
								<BlogDescription post={item} />
							</div>
						))}
					</div>
				</section>
				<PopularPost />
			</div>
		</main>
	);
}
