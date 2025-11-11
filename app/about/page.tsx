import Image from "next/image";
import aboutImg from "@/public/about.png";
import { teamContent } from "@/constant";
import { TeamWork } from "@/components/TeamWork";

export default function about() {
	return (
		<main className="bg-bodyColor ">
			<div className="max-w-[1234px]  mx-auto   px-[44px] pt-[48px] pb-[119px] lg:pt-[84px]  lg:pb-[144.32px]  lg:px-[106px]">
				<div className="text-center font-bold font-raleway text-gray666 text-[11.43px] uppercase tracking-widest desktop:text-base">
					ABOUT US
				</div>

				<div className="text-center   font-raleway font-bold text-[24px] lg:leading-[45.7px] leading-[32.8px] lg:text-[40px] desktop:leading-[45px] my-[27px]  lg:max-w-[500px] mx-auto">
					Creative Blog Writting and publishing site
				</div>
				<div className="text-center lg:mx-16 font-roboto text-gray666 text-[11.49px] desktop:text-base  mb-[21px]">
					Leverage agile frameworks to provide a robust synopsis for high level
					overviews. Iterative approaches to corporate strategy foster
					collaborative thinking to further the overall value proposition.
					Organically grow the holistic world view of disruptive innovation via
					workplace diversity and empowerment.
				</div>
				<Image
					src={aboutImg}
					alt="team reunion"
					className="rounded-[5.65px] my-[60px] lg:mt-[88px] lg:mb-[72px]"
					placeholder="blur"
				/>
				<div className="text-center font-bold font-raleway text-gray666 text-[11.43px] uppercase tracking-widest desktop:text-base">
					HOW WE WORK
				</div>
				<div className="text-center   font-raleway font-bold text-[24px] lg:leading-[45.7px] leading-[32.8px] lg:text-[40px] desktop:leading-[45px] my-[27px]  lg:max-w-[500px] mx-auto">
					I will show you how our team works
				</div>
				<div className="text-center lg:mx-16 font-roboto text-gray666 text-[11.49px] desktop:text-base  mb-[21px]">
					Bring to the table win-win market strategies to ensure perfect
					articles.
				</div>
				<div className="lg:flex gap-[28px]">
					{teamContent.map((item, index) => (
						<TeamWork key={index} number={String(index + 1).padStart(2, "0")} {...item} />
					))}
				</div>
			</div>
		</main>
	);
}
